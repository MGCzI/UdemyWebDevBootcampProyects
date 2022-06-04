//jshint esversion:6

const express = require("express");

//NOTE: app to refer to express Module
const app = express();

app.get("/", function (request, response){
    response.send("<h1>HELLO</h1>");
});

app.get("/contact", function (request, response) {
    response.send("Contact me at: contact@gmail.com");
});
app.get("/about", function (req, res) {
    res.send("Hi! my name is Ma. G ");

});
app.get("/hobbies", function (req, res) {
    res.send("Hi! I love craft");
});
app.listen(3000, function(){
    console.log("Server Started on port 300");
});