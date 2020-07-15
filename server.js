//jshint esversion:6

//Setup the server

//require the npm packages express,mongoose,bodyparser,ejs
const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const ejs = require('ejs');
const upload = require('express-fileupload')
const bodyParser = require('body-parser')

const app = express();

//setting the view engine ejs (templating engine) (in view files)
app.set("view engine",'ejs');
// use the body parser for the post request
app.use(bodyParser.urlencoded({extended:true}));
//used to store the static files (html,css,js) (public directory)
app.use(express.static("public"));

app.use(upload());

app.get("/",function(req,res){
	res.redirect("/index")
})

app.get("/index",function(req,res){
    res.render("index")
    
})

app.post("/index",function(req,res){
    //var name = req.session.name;
    
	if (req.files){
        // console.log(req.files)
        var nameOfFile = req.files.filename.name
        // console.log(nameOfFile)
        songs.push(nameOfFile)
        // console.log(songs)
        req.files.filename.mv("public/upload/"+nameOfFile,function(err){
            if(err){
                console.log(err)
            }else{
                res.redirect("/index")
            }
        })
    }
})

//to listen at port 3000
app.listen(process.env.PORT || 3000,function(){
	console.log("Running at Port 3000");
})