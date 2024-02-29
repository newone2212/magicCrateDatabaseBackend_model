//merger between two codes for youtube
const InfluencerProfile = require("../models/testingModel");
const Count=require("../models/countModel")
const axios=require("axios");
module.exports = {
    detection: async (req, res) => {
        try {
            const Number = req.body.number;
            const currentDate = new Date();
            const submit = new InfluencerProfile({
                date: currentDate,
                Number: Number
            }).save();
            console.log("Number Saved");
            res.status(201).send("done");
        } catch (error) {
            res.status(201).send({ "message": error.message })
        }
    },
    returnEntry: async (req, res) => {
        try {
            console.log("Fetech latest Entry")
            // Assuming you want to sort by the 'date' field in descending order
            const entries = await InfluencerProfile.find({})
                .sort({ date: -1 })
                .limit(2);
            //
            if (entries.length >= 2 && entries[0].Number === 1 && entries[1].Number === 0){
                //do code in this line....
                await Count.findOneAndUpdate({}, { $inc: { count: 1 } }, { upsert: true });

                res.status(200).send({"photo":1});
            }else{
                res.status(200).send({"photo":0});
            }
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    GetCount:async(req,res)=>{
        try{
            const countValue=await Count.findOne()
            .then((countValue)=>{
                res.status(200).send({ "Moldcount": countValue.count });
            }).catch((error)=>{ 
                res.status(404).json({ error: "Count value not found" });
            })
        }catch(error){
            res.status(400).send(error)
        }
    }
   


}

