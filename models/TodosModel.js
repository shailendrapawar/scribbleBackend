const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    title:{
        type:String
    },
    desc:{
        type:String
    },
    status:{
        type:Boolean,
        default:false
    }
})

const TodoModel=mongoose.model("TodoModel",TodoSchema)
module.exports=TodoModel