const fs = require("fs")
const Food = require("../models/foodSchema")

exports.addFood = async(req, res) => {
  try {

    const { name, description, price, category } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file uploaded",
      });
    }
    let image_filename = req.file.filename;

    const food = await Food.create({ name, description, price, category,image:image_filename})


    return res.status(200).json({
      success: true,
      data:food,
      message: "Food is Added",
    })


  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    })

  }
}

// all foods list 

exports.allFoods = async(req,res) =>{
  try {
    
    const foods = await Food.find({})

    return res.status(200).json({
      success:true,
      data:foods,
      message:"get all foods"
    })


  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      message:"Error"
    })
  }
}

// remove food 

exports.removeFood = async(req,res) =>{
  try {
    
    const id = req.body.id
    
    const food = await Food.findById(id)
  

    fs.unlink(`uploads/${food.image}`,() => {})

    
    await Food.findByIdAndDelete(id);
 
    res.status(200).json({
      success:true,
      message:"Food removed"
    })



  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      message:"Error"
    }) 
    
  }
}







