const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/venture", {  useNewUrlParser: true,useUnifiedTopology: true }, (err)=>{
    if(!err)
    {
        console.log("success");
    }
    else{
        console.log("error");
    }
});

const User = require("./user.model");