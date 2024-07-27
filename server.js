const express=require('express');
const app=express()
const cors=require('cors')
const todoModel=require("./models/TodosModel")

const {createServer}  =require("http")
const myServer=createServer(app);

const {Server} =require("socket.io")

const io=new Server(myServer,{
  cors:{
    origin:"*"
  }
})

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

io.on("connection",(socket)=>{


  //for handling todo status...
  socket.on("setStatus",async({todoId,todoStatus})=>{
    let val;
    if(todoStatus){
      val=false
    }else{
      val=true
    }
    const res=await todoModel.findByIdAndUpdate({_id:todoId},{
    $set:{status:val}
    })
  })


  
})





const port=process.env.PORT || 5000;

myServer.listen(port,()=>{
    console.log(" my server listening at port "+port)
})