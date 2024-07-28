const mongoose=require("mongoose")
require("dotenv").config()

const DbConnect=async()=>{
   let dbRes= await mongoose.connect(process.env.MONGO_URL)
   if(dbRes){
      console.log("db connected")
   }else{
      console.log("db connection issue"+dbRes.err)
   }
   // process.env.MONGO_URL

}

module.exports=DbConnect;