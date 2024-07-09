const express=require('express');
const todoRouter=express.Router()

const TodoControllers=require("../controllers/TodoControllers")

todoRouter.post("/createTodo",TodoControllers.createTodo)
todoRouter.post("/deleteTodo/:todoId",TodoControllers.deleteTodo)
todoRouter.put("/editTodo/:todoId",TodoControllers.editTodo)

module.exports=todoRouter