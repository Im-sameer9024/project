const jwt = require("jsonwebtoken")
require("dotenv").config()
exports.authMiddlerware = async(req,res,next) =>{
  try {
    
    const {token} = req.headers;
    if(!token){
      return res.json({
        success:false,
        message:"Token does't exists , Please try again later"
      })
    }

    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
    req.body.userId = tokenDecode.id;
    next()

  } catch (error) {
    console.log(error)
    return res.json({
      success:false,
      message:"Error"
    })
  }
}