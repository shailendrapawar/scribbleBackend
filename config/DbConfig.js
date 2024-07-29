const mongoose=require("mongoose")
require("dotenv").config()

const DbConnect=async()=>{
   let dbRes= await mongoose.connect(process.env.MONGO_URL)
   if(dbRes){
      console.log("db connected"+dbRes)
   }else{
      console.log("db connection issue"+dbRes)
   }
   // process.env.MONGO_URL

}

module.exports=DbConnect;