const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:true,
  },
  email:{
    type:String,
    trim:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  cartData:{
    type:Object,
    default:{}
  },
},{minimize:false})

module.exports = mongoose.model("User",userSchema)