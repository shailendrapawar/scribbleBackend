const mongoose=require("mongoose")
require("dotenv").config()
const DbConnect=async()=>{
   let dbRes= await mongoose.connect(process.env.MONGO_URL)
   dbRes?console.log("db connected"):console.log("db connection issue")

}

module.exports=DbConnect;