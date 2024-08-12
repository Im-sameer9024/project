const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  description:{
    type:String,
    trim:true,
  },
  price:{
    type:Number,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
     
  },
    
})

module.exports = mongoose.model("Food",foodSchema)