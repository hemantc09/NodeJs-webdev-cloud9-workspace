console.log("express exercise goes from here");
var express = require("express");
var app = express();

//var voicearr  = ['oink', 'Moo','woof woof'];

app.get("/",function(req,res){
  console.log("Welcome to the express app exercise");   
  res.send("Welcome to the express app exercise");
});

app.get("/speak/:animalName",function(req,res){
   //the below if statement is not the dry code.
    /*if(animal === "pig") {
         console.log(animal);  
         res.send("The " + animal +" says ' "+ voicearr[0]);      
    }
    else if(animal === "cow"){
        console.log(animal);  
         res.send("The " + animal +" says ' "+ voicearr[1]);      
    }
    else if(animal === "dog"){
        console.log(animal);  
         res.send("The " + animal +" says ' "+ voicearr[2]);      
    }*/
    var animal = req.params.animalName.toLowerCase();
    
    // Use the dictionary to make code less dry
    var sounds = {
        pig: "oink",
        cow: "Moo",
        dog: "Woof Woof",
        sheep: "Meh Meh"
    }
   
    var sound = sounds[animal];
    console.log("sounds is:" + sound);
     res.send("The " + animal +" says '"+ sound + "'");      
});

app.get("/repeat/:text/:count",function(req, res) {
    var text  = req.params.text;
    var count = req.params.count;
    var result = "";
    for(var i = 0 ; i < count ;i++){
        /*res.send(text + " " +  times); this will send response only once 
        So we gonna use the res.write to send multiple response from 
        server to browse*/
        //contruct a string append 
        result += " " +text;
        console.log(result);
        //res.write(text + " ");  
    }
    //res.end() follows up and it needs for res.write();
   // res.end();
   
   res.send(result);
});

app.get("*",function(req, res) {
    res.send("Sorry! Page not found..What are you doing with your life?");
});



app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Now the app is listening!");
});