const express=require('express');
const app=express()

require('dotenv').config()

const DbConnect=require("./config/DbConfig")
DbConnect()
const authRouter=require("./routes/AuthRoutes")
app.use(express.json())
app.use(authRouter);


const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server listening at port "+port)
})