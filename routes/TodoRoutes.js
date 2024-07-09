const express=require('express');
const todoRouter=express.Router()

const TodoControllers=require("../controllers/TodoControllers")

todoRouter.post("/createTodo",TodoControllers.createTodo)
todoRouter.delete("/deleteTodo/:todoId",TodoControllers.deleteTodo)
todoRouter.put("/editTodo/:todoId",TodoControllers.editTodo)
todoRouter.get("/getTodo/:todoId",TodoControllers.getTodo)
todoRouter.delete("/deleteAllTodos/:userId",TodoControllers.deleteAllTodo)

module.exports=todoRouter