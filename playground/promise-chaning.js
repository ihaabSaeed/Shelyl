require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdata('5f1588dd5e6a4f2cecfeb110',{age:1}).then((user)=>{
console.log(user)
return User.countDocumments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
      console.log(e)
})
const updataAgeAndCount = async(id,age)=> {
    const user = await User.findByIdAndUpdata(id,{age})
    const count = await User.countDocumments({age})
    return count
}
updataAgeAndCount('5f1588dd5e6a4f2cecfeb110',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})