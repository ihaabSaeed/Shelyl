const  mongoose = require('mongoose')
const validator = require('validator')
const { request, Router } = require('express')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})
const User = mongoose.model('User',{
    name:{
        type:String,
        require:true,
        trim:true


    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value))
            {
throw new Error('Email Is Invalid')
            }
        }
        
    },
    age: {
        type:Number,
        validate(value){
        }
    }
})
