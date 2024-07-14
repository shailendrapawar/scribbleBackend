const express=require('express');
const app=express()
const cors=require('cors')

require('dotenv').config()

const corsOptions = {
  origin: '*', // Replace with your frontend URL
  methods: 'GET,POST', // Specify allowed methods
};

// Apply CORS middleware
app.use(cors());
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