var express = require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");

app.get("/",function(req, res) {
   res.render("search"); 
});

app.get("/results",function(req,res){
    //search name is coming from the search.ejs page , the name of the input tag
    var query = req.query.search;
    //form a url using serach user term entered in the input
    var url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
    console.log(url);
   
    request(url,function(error,response,body){
        
      
        if(!error&& response.statusCode === 200){
            var parseMovieData = JSON.parse(body);
            //body is the string so it has to be parse to json object
            res.render("results",{parseMovieData:parseMovieData});
            //that will render results.ejs
        }
});
    
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Movie app server is started!");
});