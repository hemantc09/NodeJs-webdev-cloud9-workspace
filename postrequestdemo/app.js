var express = require("express");
var app = express();
//body parser is used to cretae req.body
var bodyParser = require("body-parser");
//now tell express to use the body parser using following command
app.use(bodyParser.urlencoded({extended: true}));
var friends = ["Anna","Ellie","James","Frankie"];

app.set("view engine", "ejs");

app.get("/",function(req, res){
    res.render("home"); 
});

app.post("/addfriend",function(req, res){
    //FYI: newfriend is the name property of the input tag in friends.html
    // console.log(req.body.newfriend);
    var newFriend = req.body.newfriend;
    //push in to array 
    friends.push(newFriend);
    //after adding redirect to freinds page
    res.redirect("/friends");
   // res.send("you are reached to friend post rout");
});


app.get("/friends",function(req, res){
    res.render("friends",{friends: friends});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});