const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    
    desc:{
        type:String
    },
    owner:{
        type:String
    },
    status:{
        type:Boolean,
        default:true
    }
})

const TodoModel=mongoose.model("TodoModel",TodoSchema)
module.exports=TodoModel