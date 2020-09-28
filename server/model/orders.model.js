const mongoose = require('mongoose');

var OrderDetailsSchema = new mongoose.Schema({
    Brand : {
        type: String,
        required: true,
        trim: true,
    },
    Product_Name : {
        type: String,
        required: true,
        trim: true,
    },
    Amount:{
        type: Number,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Total_Amount: {
        type: Number,
        required: true,
    },
    Discount:{
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now()
    },
}, {
    versionKey: false,
    collection: "orderdetails"
});

var OrdersSchema = new mongoose.Schema({
    Order_Id:{
        type: String,
        required: true,
        trim: true,
    },
    Customer_Name: {
        type: String,
        required: true,
        trim: true,
    },
    Customer_Number: {
        type: Number,
        required: true,
    },
    Order_Type: {
        type: String,
        required: true,
        //sell or purchase
    },
    Order_Details:{
        type: Array,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Total_Amount: {
        type: Number,
        required: true,
    },
    Paid:{
        type: String,
        required: true,
        //no, yes, partial
    },
    Paid_Amount:{
        type: Number,
        required: true,
    },
    Discount:{
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now()
    },
}, {
    versionKey: false,
    collection: "orders"
});

mongoose.model("orders",OrdersSchema);
mongoose.model("orderDetails",OrderDetailsSchema);