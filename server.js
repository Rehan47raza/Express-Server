const express = require("express");
const app = express();

app.get("/",function(request,response){

//console.log(request);
response.send("<h1>Welcome to the Server!!</h1>");

} );

app.get("/contact",function(request,response){

//console.log(request);
response.send("<h1>Contact me @ :rehanraza260@gmail.com</h1>");

} );

app.get("/about",function(request,response){

//console.log(request);
response.send("<h1>My Name is Rehan Raza..</h1>");

} );

app.get("/hobbies",function(request,response){

//console.log(request);
response.send("<h1>My Hobbies!!</h1>");

} );

app.listen(3000,function(){

console.log("server started on port 3000 ");

});
