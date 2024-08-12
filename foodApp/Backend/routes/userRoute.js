const express = require("express")
const Route = express.Router()
const{loginUser,registerUser} = require("../controllers/userController")

Route.post("/login",loginUser)
Route.post("/register",registerUser)


module.exports = Route