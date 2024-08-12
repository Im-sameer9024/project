const mongoose = require("mongoose")
require("dotenv").config()


const dbConnect = () =>{
  mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  })
  .then(()=>{
    console.log("Database is Connected Successfully")
  }).catch((error) =>{
    console.log(error)
    process.exit(1)
  })
}

module.exports = dbConnect;