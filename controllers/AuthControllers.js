const AuthModel = require("../models/AuthModel");
const bcrypt = require('bcrypt');

class AuthControllers {
    static login = async (req, res) => {
        console.log(req.body)
        res.send("register wokring")
    }

    //for register of new user
    static register = async (req, res) => {

        const { name, email, number, password } = req.body

        //checking for if user exists
        const isExist = await AuthModel.findOne({ email: email });

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
                    id: isCreated._id,
                    name: name
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
        console.log(id)
    }
}

module.exports = AuthControllers