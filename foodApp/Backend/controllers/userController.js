const User = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")
require('dotenv').config()



// Login User 

exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const existing = await User.findOne({ email })
    if (!existing) {
      return res.json({
        success: false,
        message: "User is not exists"
      })
    }
    const passwordMatch = await bcrypt.compare(password,existing.password)

    if (!passwordMatch) {
      return res.json({
        success: false,
        message: "Password does't match"
      })
    }

    const token = createToken(existing._id)

    console.log("good")
    return res.json({
      success: true,
      token: token,
      message:"User Logged in"
    })

  } catch (error) {
    console.log(error)
    return res.json({
      success: false,
      message: "Network Issues"
    })
  }
}



const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Register User 

exports.registerUser = async (req, res) => {
  try {

    const { name, password, email } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.json({
        success: false,
        message: "User is Registered"
      })
    }

    // validating email format & password 

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Email is not valid"
      })
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password is not Strong"
      })
    }

    // hashing Password 

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10)

    } catch (error) {
      return res.json({
        success: false,
        message: "Some error in hashing"
      })
    }

    const newUser = new User({
      name, email, password: hashedPassword,
    })
    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({
      success: true,
      token: token,
    })

  } catch (error) {

    console.log(error)
    res.json({
      success: false,
      message: "Error"
    })
  }
}

