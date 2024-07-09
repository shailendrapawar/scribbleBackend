const express=require('express');
const todoRouter=express.Router()

const TodoControllers=require("../controllers/TodoControllers")

todoRouter.post("/createTodo",TodoControllers.createTodo)
todoRouter.post("/deleteTodo",TodoControllers.deleteTodo)
todoRouter.post("/editTodo",TodoControllers.editTodo)

module.exports=todoRouter