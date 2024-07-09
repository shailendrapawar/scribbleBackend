const AuthModel = require("../models/AuthModel");
const bcrypt = require('bcrypt');

class AuthControllers {


    static login = async (req, res) => {
        const {email,password}=req.body;

        const checkUser= await AuthModel.findOne({email:email});
        if(checkUser){
            const checkPass=await bcrypt.compare(password,checkUser.password)
            if(checkPass){
                res.json({
                    status:200,
                    msg:"Authentic User",
                    id:checkUser._id,
                    email:checkUser.email
                })
            }else{
                res.json({
                    status:400,
                    msg:"Incorrect Password"
                })
            }
        }else{
            res.json({
                status:400,
                msg:"User dosn't exists"
            })
        }
    }

    //for register of new user
    static register = async (req, res) => {

        const { name, email, number, password } = req.body

        //checking for if user exists
        const isExist = await AuthModel.findOne({ email: email }).select("-password")
     
        if (!isExist) {
            //creating hash pass
            let salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(password, salt)

            const newUser = new AuthModel({
                name: name,
                email: email,
                number: number,
                password: hashPass
            })
            const isCreated = await newUser.save();

            //user created
            if (isCreated) {
                res.send({
                    status: 201,
                    msg: "User created",
                })
            } else {
                console.log(isCreated)
            }
        } else {

            res.send({
                status: 400,
                msg: "User already exists "
            })
        }
    }
    static getUser = async (req, res) => {
        const { id } = req.params
        
    }
}

module.exports = AuthControllers