const mongoose = require("mongoose");
require("dotenv").config();

const connection = async(req,res)=>{
    try{
       await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log("DB Connected Successfully !!");
    }
    catch(err){
       console.log("DB Connection Issue");
       console.log(err);
       process.exit(1);
    }
}

module.exports = connection;