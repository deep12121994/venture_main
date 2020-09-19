const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

var UsersSchema = new mongoose.Schema({
    Emp_Id:{
        type: Number,
        required: true,
    },
    First_Name : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        max: 25,
    },
    Last_Name : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        max: 25,
    },
    DOB : {
        type: String,
        required: true,
        trim: true,
    },
    Email : {
        type: String,
        required: [true,"add email"],
        unique: [true],
        lowercase: true,
    },
    Phone : {
        type: String,
        required: true,
        trim: true,
    },
    Password : {
        type: String,
        required: true,
        trim: true,
    },
    Date: {
        type: Date,
        default: Date.now()
    },
},{
    versionKey: false,
    collection: "users"
});

autoIncrement.initialize(mongoose.connection);
UsersSchema.plugin(autoIncrement.plugin, {
    model: "users",
    field: "Emp_Id", 
    startAt: 1, 
    incrementBy: 1, 
});

mongoose.model("users",UsersSchema);