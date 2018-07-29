console.log("Express app go from here")

var express = require("express");
var app  = express();

// route  "/" => "Hi Hemant"
//route path "/"
app.get("/",function(req,res){
    res.send("Hi Hemant");
}); 

// bye page route -  "bye" => "Bye Hemant"
app.get("/bye",function(req,res){
    res.send("Bye!!!");
})

// dog page route "/dog " => "Meow"
app.get("/dog",function(req, res) {
    console.log("Someone made a request to /dog");
   res.send("Meow"); 
});

//follow the pattern example below
app.get("/r/:subredditName",function(req, res) {
    var subreddit = req.params.subredditName;
    console.log("Welcome to the  " + subreddit.toUpperCase() + "  Subreddit");
   res.send("welcome to the subreddit") ;
});

//route parameters multipl
app.get("/r/:subredditName/comments/:id/:title/",function(req, res) {
    console.log(req.params);
   res.send("welcome to the commets page"); 
});

//all incorrect url goes to * patter
app.get("*",function(req, res) {
   res.send("You are At * route because of the incorrect url ") ;
});






//tell express to listen for requests
//PORT # coming from the cloud 9
//process.env.IP need to use 
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Sever has started!!");
});
