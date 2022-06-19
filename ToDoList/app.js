const PORT = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const {getDate} = require("./date.js");


const app = express();
app.set('view engine', 'ejs');


const mainObj = {
    listTitle: "",
    newListItems: ["cooking"]
};

const workObj = {
    listTitle: "Work List",
    newListItems: []
};

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


app.get("/", (req, res) => {

    mainObj.listTitle = getDate();

    //We need to send the object with all the keys that we use in the file ejs.
    res.render('list', mainObj);

})

app.get("/work", (req, res) => {
    res.render("list", workObj);
})
app.get("/about", (req, res) => {
    res.render("about");
})


app.post("/", (req, res) => {
    let item = req.body.newItem;
    console.log("item", item)

    //We reload the main page where all the values are pass in the object.
    if (req.body.list === "Work") {
        workObj.newListItems.push(item);
        res.redirect("/work");
    } else {
        mainObj.newListItems.push(item);
        res.redirect("/");
    }

});


app.listen(PORT, () => {
    console.log(`\tServer is in port ${PORT}\n\thttp://localhost:${PORT}/`)
})