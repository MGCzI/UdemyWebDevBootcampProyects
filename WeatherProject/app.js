const express = require("express");
const https = require("https")
const bodyParse = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended: true}));

function getUnitTemp(unit){
    let stringUnit=" ";
    console.log("unit", unit)
    switch (unit){
        case "metric":
            stringUnit = "C";
            break;
        case "imperial":
            stringUnit = "F";
            break;
        case "standard":
            stringUnit ="K";
            break;
        default:
            stringUnit = "-";
            break;
    }
    console.log("stringUnit", stringUnit)
    return stringUnit;


}

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
    // res.sendFile(__dirname+"/index.html");
    // res.send();


});

app.post("/", function (req, res){
    console.log("--------------------------------------------------------------------------")

    //Construct the url for the query .
    const query = req.body.cityName;
    const key = "a276aed536144ec634595243856806ac#";

    const units = req.body.units;
    console.log(" req.body: ",  req.body);
    console.log("units: ", units)
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + key;

    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherdata = JSON.parse(data)
            const temp = weatherdata.main.temp;
            const weatherDescription = weatherdata.weather[0].description
            const icon = weatherdata.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            const stingUnit =getUnitTemp(units);

            console.log("temp: ", temp);
            console.log("weatherDescription: ", weatherDescription);
            console.log("query", query);
            res.write("<h1 class=\"title\"> Weather Forecast </h1>\n");
            res.write("<h2>The temperature in " + query + " is: " + temp +" "+ stingUnit +" </h2>")
            res.write("<p>The waether is currentrly: " + weatherDescription + "</p>");
            res.write("<img src=" + imageUrl + ">");
            // Only ONE send can be made!
            res.send();

        });

    });




})

//
// app.get("/", function (req, res) {

// });

app.listen(3000, function () {
    console.log("server is running on port 3000.")
})