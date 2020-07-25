const  mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')
 const userScheme  = new mongoose.Schema({
    name:{
      type:String,
      required:true,
      trim:true
    },
    age:{
     type:Number,
     default:0
    },
    password:{
         type:String,
         required:true,
         minlength:8,
         trim:true,
         validate(value){
             if(value.toLowerCase().includes('password')){
                 throw new Error('Password Cannot Contain "passowrd')
             }
            

             
         }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error('Email is Invalid')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    avatar:{
        type:Buffer
    }
},{
    timestamps:true
})

userScheme.virtual('tasks',{
    ref:'Task',
    localField:'',
    foreignField:'owner'
})

userScheme.method.toJSON = function(){
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject

}


userScheme.method.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id:user._id.toString},process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
userScheme.statics.findByCredentials  =async (email,password) =>{
   const user = await User.findOne({ email })
   if(!user)
   {
       throw new Error('Unable to login')
   }
   const isMatch  = await bcrypt.compare(password, user.password)
   if(!isMatch){
       throw new Error('Unable to login')
   }
   return user
}


userScheme.pre('save',async function (next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})
userScheme.pre('remove', async function (next){
    const user = this
    Task.deleteMany({ owner:user._id})

    next()
})
 const User = mongoose.model('User', userScheme)
module.exports = User