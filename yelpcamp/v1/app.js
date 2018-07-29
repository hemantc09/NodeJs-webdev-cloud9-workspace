var express = require("express");
var app = express();
var bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds = [
        {name: "Crystal Cove", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f2c979a2ecb2b0_340.jpg"},
        {name: "Sequoia National park", image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144297f8c17ca6eabd_340.jpg"},
        {name: "Los Padres National Forest", image: "https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104496f2c979a2ecb2b0_340.jpg"},
        {name: "Doheny Stage Beach", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f2c979a2ecb2b0_340.jpg"},
        {name: "Crystal Cove", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f2c979a2ecb2b0_340.jpg"},
        {name: "Sequoia National park", image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144297f8c17ca6eabd_340.jpg"},
        {name: "Los Padres National Forest", image: "https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104496f2c979a2ecb2b0_340.jpg"},
        {name: "Doheny Stage Beach", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104496f2c979a2ecb2b0_340.jpg"}
        ];

app.get("/",function(req,res){
    res.render("landing");
});

        
app.get("/campgrounds",function(rep,res){
        res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
    //res.send("You hit the post route");
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    //redirect campgrounds page
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new",function(rep, res) {
    res.render("new")    
});

app.listen(process.env.PORT,process.env.IP, function(){
   console.log("Yelp camp server started"); 
});