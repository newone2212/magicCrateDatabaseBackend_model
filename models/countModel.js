const mongoose = require("mongoose");
const validator = require('validator');
require("dotenv").config();
const Countschema = new mongoose.Schema({
  count:{
    type:Number,
    default: 0,
  }
})



const Plans_detail = new mongoose.model('Count_detail', Countschema);

module.exports = Plans_detail;