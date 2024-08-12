const express = require("express");
const app = express()
const dbConnect = require("./config/database")
require("dotenv").config()
const port = process.env.PORT || 5000
const cors = require("cors")
const food = require("./routes/foodRoute");
const user = require("./routes/userRoute")

app.use(express.json())
app.use(cors())
app.use("/api/food",food)
app.use("/uploads", express.static("uploads"));
app.use("/api/user",user)


dbConnect()


app.get("/" ,(req,res) => {
  res.send("Server is good")
})

app.listen(port,() =>{
  console.log(`Port is on ${port}`)
});