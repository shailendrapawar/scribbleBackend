const express=require("express")

const AuthController=require("../controllers/AuthControllers")

const authRouter=express.Router()
authRouter.post("/register",AuthController.register)
authRouter.post("/login",AuthController.login)
authRouter.get("/getUser/:id",AuthController.getUser)

module.exports=authRouter

