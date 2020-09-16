const connection = require("./model");
const express = require("express");

const app = express();
const path = require("path");
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const { application } = require("express");

const PORT = process.env.PORT || 4000;

const userController = require("./controller/route");

app.use(express.json());

app.set('views', path.join(__dirname, "/views/"));

app.engine("hbs", expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");

app.get("/",(req,res) => {
    //res.send("hello");
    res.render("index", {});
    //res.json({message: "API Working"});
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use("/user",userController);

app.listen(PORT,(req,res) =>{
    console.log("Server started ");
});