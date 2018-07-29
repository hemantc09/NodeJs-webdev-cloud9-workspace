var express = require("express");
var app = express(); //expecute express as a function

//this statement tell express to serve the css from the public directory
app.use(express.static("public"));
//this statement tells the all files are .ejs extension so you dont need to write file name with  .ejs each time
app.set("view engine","ejs");

app.get("/",function(req,res){
   // res.send("<h1>Welcome to the HomePage of EJS App</h1><h2>EJS</h2>");
   res.render("home")
})

app.get("/fall/:thing1",function(req,res){
    var thing  = req.params.thing1;
    //render the file for respective path
    //pass the variable in the thingVar object thingVar: thing
    res.render("love", {thingVar: thing });
})

app.get("/posts",function(req, res) {
    //create an array of posts
   var postsObj = [
       {title: "post1",author: "author_Hemant"},
       {title: "post2",author: "author_Pratik"}
       ];
       //pass the postsObj to the post.ejs file and  you can ignore the.ejs extension as wel and add the view engine
       res.render("posts",{postsObj: postsObj});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server listening..");
}); //cloud 9 environment variable for port