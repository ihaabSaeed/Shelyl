const path = require('path')
const express = require('express')
const bodyPareser = require('body-parser');
var cors = require('cors')
const mongoose = require ('mongoose')

// mongoDelete
const validator = require('validator')
const { request, Router } = require('express')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
//mongoenddelete

app.use(bodyPareser.json())
app.use(cors())
app.use(
	bodyPareser.urlencoded({
		extended:false
	})
)
var Users = require('./routes/Users')
app.use('/users',Users)
const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname , '../public')

 app.get("/Signup",function(req,res){
 	res.sendFile(__dirname+"/Signup.html")
})
  app.get("/Login",function(req,res){
 	res.sendFile(__dirname+"/Login.html")
})



app.use(express.static(publicDirectoryPath))
app.listen(port,()=>{
	console.log('Server on 3000 avialible' + port)
});




