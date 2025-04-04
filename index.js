const express = require("express");
const app = express();
const path = require('path');
const parser = require('body-parser');

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(parser.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/Success", (req, res) => {
    if(req.body.username === "Admin" && req.body.password === "Admin") {
        res.render("loginSuccess");
    }
});


app.listen(3000, () => {
    console.log("Server Started");
});