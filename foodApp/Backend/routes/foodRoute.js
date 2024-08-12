const express = require("express")
const Route = express.Router()
const {addFood,allFoods,removeFood} = require("../controllers/foodController")
const multer = require("multer")

// Image Storage Engine 
const storage = multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb) =>{
    return cb(null,`${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({storage:storage})

Route.post("/add",upload.single("image"),addFood)
Route.get("/list",allFoods)
Route.post("/remove",removeFood)


module.exports = Route