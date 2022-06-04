//NOTE: app to refer to express Module
const express = require("express");
const bodyParse = require("body-parser");

const app = express();
//NOTE: to be able to use the information from the server
app.use(bodyParse.urlencoded({extend: true}));

app.get("/", function (req,res) {
    //NOTE: __dirname give the path to where the folder is.
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    //NOTE:  show the information obten
    console.log(req.body);

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The result is: " + result);

});

//NOTE: Add the page /bmiCalculator
app.get("/bmiCalculator", function (req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
//NOTE: Respond to the page /bmiCalculator
app.post("/bmiCalculator", function (req, res){
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);

    let bmi = weight/(height * height);
    res.send ("Your BMI is: " + bmi);
});

app.listen(3000, function(){
    console.log("Server Started on port 300");
});