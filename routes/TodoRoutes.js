const express=require('express');
const todoRouter=express.Router()

const TodoControllers=require("../controllers/TodoControllers")

todoRouter.post("/createTodo",TodoControllers.createTodo)
todoRouter.delete("/deleteTodo/:todoId/:userId",TodoControllers.deleteTodo)
todoRouter.delete("/deleteAllTodos/:userId",TodoControllers.deleteAllTodo)
todoRouter.post("/getAllTodo",TodoControllers.getAlltodo)

module.exports=todoRouter
