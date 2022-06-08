//jshint esversion: 6
// a64aa49837074b3a00ca4d347d7a2669-us10
//list id:
const listId = "8cc977d362";

// request paquet that we install.
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
//Requiring the mailchimp module // npm install @mailchimp/mailchimp_marketing
const client = require("@mailchimp/mailchimp_marketing");


const app = express();

//To send the css and image to the server
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Set up the michelling
client.setConfig({apiKey: "a64aa49837074b3a00ca4d347d7a2669",  server: "us10",});



app.get("/", function (req, res) {
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function (req,res){
    console.log("--------------------------------------")
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;
    console.log(firstName, lastName, email);

    //We creat the object to send.
    const subscribingUser = {firstName: firstName, lastName: lastName, email: email};

    const run = async () => {
        try{
            const response = await client.lists.addListMember(listId, {
                email_address: subscribingUser.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: subscribingUser.firstName,
                    LNAME: subscribingUser.lastName
                }
            });
            console.log(response); // (optional)
            res.sendFile(__dirname + "/success.html");

        }catch (err){
            console.log(err.status);
            res.sendFile(__dirname + "/failure.html");
        }
    };
    run();
});

app.post("/failure.html", function(req, res) {
    res.redirect("/");
});

app.listen(3000, function (req, res){
    console.log("Server is running on port 3000");
});


