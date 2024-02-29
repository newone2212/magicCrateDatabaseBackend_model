const mongoose = require("mongoose");
const validator = require('validator');
require("dotenv").config();
const Testingschema = new mongoose.Schema({
  date:{
    type:Date
  },
  Number:{
    type:Number
  }
})



const Plans_detail = new mongoose.model('Testing_detail', Testingschema);

module.exports = Plans_detail;