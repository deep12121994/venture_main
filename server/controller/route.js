const express = require("express");
//const { check, validationResult} = require("express-validator/check");
//const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const router = express.Router();
const userModel = mongoose.model("user");

router.get("/addcontrol", (req,res) => {
    res.send("user controller");
});

router.get("/add", (req, res) => {
    res.render("add-user");
});

router.get("/registration", (req,res) => {
    res.render("registration");
});

router.post("/registration", (req, res) => {
    console.log("registration Post Method Call");

    userModel.findOne({ e_mail: req.body.email }, (user,err) => {
        if (user) {
          return res.status(400).json({ email: "Email already exists" });
        } 
        else 
        {
            var us = new userModel();
            us.Emp_id = req.body.Emp_id;
            us.First_Name = req.body.First_Name;
            us.Last_Name = req.body.Last_Name;
            us.Date_Of_Birth = req.body.Date_Of_Birth;
            us.e_mail = req.body.e_mail;
            us.phone = req.body.phone;
            us.pass = req.body.pass;
            us.date = req.body.date;
            us.save((err, doc) => {
                if(!err)
                {
                    res.redirect("/user/list");
                }else{
                    res.send("Error Occured");
                }
            });
        }
    });

});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res) => {


    console.log("login Post Method Call");
    console.log(req.body.email);
    console.log(req.body.password);
    userModel.findOne({e_mail: req.body.email, pass: req.body.password}, (err, user) => {
        if(err){
            return res.status(500).send();
        }

        if(!user)
        {
            return res.status(404).send({message : " login fail!" });
        }
        
        return res.status(200).send( {message : "Successful login!" });
    })
        
});

router.post("/add", (req, res) => {


   var us = new userModel();
    us.Emp_id = req.body.Emp_id;
    us.First_Name = req.body.First_Name;
    us.Last_Name = req.body.Last_Name;
    us.Date_Of_Birth = req.body.Date_Of_Birth;
    us.e_mail = req.body.e_mail;
    us.phone = req.body.phone;
    us.pass = req.body.pass;
    us.save((err, doc) => {
        if(!err)
        {
            res.redirect("/user/list");
        }else{
            res.send("Error Occured");
        }
    });
});

router.get("/list", (req,res) => {


    userModel.find((err,docs) => {
        if(!err)
        {
            console.log(docs);
            res.render("list", {data : docs});
        }else{
            res.send("Error");
        }
    }).lean()
});

module.exports = router;