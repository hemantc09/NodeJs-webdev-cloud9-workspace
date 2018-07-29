//require the request object for the request
var request = require("request");
console.log("Sun set in hawai is at: ")
//make a actual request using request
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(error,response,body){
    //to do sometihng with the information we got back from API we 
    //use the call back function example after google url
    //error: hold any potential error
    //response: Any repsonse getting from google.com e.g. status code 200 ok etc
    //body: actual response or html or text print it
    
    if(!error && response.statusCode == 200){
        // if there is any error then print 
        var parserdData = JSON.parse(body);
        console.log(parserdData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    }
    
})
