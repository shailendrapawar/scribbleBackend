const express=require('express');
const app=express()

require('dotenv').config()

const DbConnect=require("./config/DbConfig")
DbConnect()
const authRouter=require("./routes/AuthRoutes")
app.use(express.json())
app.use(authRouter)

// app.post("/register",async(req,res)=>{
//     console.log(req.body)
// })



const port=process.env.PORT||5000;
app.listen(3000,()=>{
    console.log("server listening at port "+port)
})