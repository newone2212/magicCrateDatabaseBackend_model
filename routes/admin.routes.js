const express = require("express");
const router = express.Router();
const control = require("../controller/test")


//route for api calls
router.post("/detection",control.detection);
router.get("/LasttwoEntry",control.returnEntry);
router.get("/CementMoldNumber",control.GetCount);

module.exports = router