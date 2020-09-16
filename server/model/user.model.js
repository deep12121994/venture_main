const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    Emp_id:{
        type: Number,
        required: "Required"
    },
    First_Name : {
        type: String,
        required: "Required"
    },
    Last_Name : {
        type: String,
        required: "Required"
    },
    Date_Of_Birth : {
        type: String,
        required: "Required"
    },
    e_mail : {
        type: String,
        required: "Required"
    },
    phone : {
        type: String,
        required: "Required"
    },
    pass : {
        type: String,
        required: "Required"
    },
    Date: {
        type: Date,
        default: Date.now()
    },
},{
    versionKey: false,
    collection: 'user'
});

mongoose.model("user",UserSchema);