const  mongoose = require('mongoose')
const { request, Router } = require('express')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})

// const me = new User({
//     name:'Ihaab',
//     age:'19',
//     email:'ihaab@',
//     password:'     re32dsfgfdgfsdgfsd        '
// })
// me.save().then(()=>{
// console.log(me)
// }).catch((error) =>{
//     console.log('Error ',error)
// })