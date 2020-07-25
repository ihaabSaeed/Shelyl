const path = require('path')
const express = require('express')
const bodyPareser = require('body-parser');

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




