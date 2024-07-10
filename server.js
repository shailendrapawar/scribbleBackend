const express=require('express');
const app=express()

require('dotenv').config()

const DbConnect=require("./config/DbConfig")
DbConnect()
const authRouter=require("./routes/AuthRoutes")
const todoRouter=require("./routes/TodoRoutes")
const noteRouter=require("./routes/NoteRoutes")
app.use(express.json())
app.use(authRouter);
app.use(todoRouter)
app.use(noteRouter)

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("server listening at port "+port)
})