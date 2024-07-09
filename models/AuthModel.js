const mongoose=require("mongoose");

const AuthSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    number:{
        type:Number
    },
    profileImg:{
        type:String,
        default:null
    },
    todos:[
        {type: mongoose.Schema.Types.ObjectId,ref:"TodoModel"}
    ],
    notes:[{
        type:mongoose.Schema.Types.ObjectId,ref:"NoteModel"
    }]
})

const AuthModel=mongoose.model("AuthModel",AuthSchema);

module.exports=AuthModel