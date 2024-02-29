const mongoose = require("mongoose");
const validator=require('validator');
require("dotenv").config();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const Adminschema = new mongoose.Schema({
    admin_name:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:Number
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    requestState:{
        type:String
    },
    repassword:{
        type:String
    }
})
Adminschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password,10);
        this.repassword=undefined;
    }
    next();
})


const Brand_detail=new mongoose.model('Admin_detail',Adminschema);

module.exports=Brand_detail;
