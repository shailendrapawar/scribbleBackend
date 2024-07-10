const mongoose=require('mongoose');
const NoteSchema=new mongoose.Schema({
    title:{
        type:String
    },
    desc:{
        type:String
    },
    owner:{
        type:String
    },
    status:{
        type:Boolean,
        default:false
    }
})

const NoteModel=mongoose.model("NoteModel",NoteSchema)
module.exports=NoteModel