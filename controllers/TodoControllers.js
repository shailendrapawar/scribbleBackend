const TodoModel=require("../models/TodosModel")

class TodoControllers{
    static createTodo=async(req,res)=>{
        const {title,desc}=req.body

        const newTodo=new TodoModel({
            title:title,
            desc:desc
        })

        const isCreated=await newTodo.save()
        if(isCreated){
            res.json({
                status:201,
                msg:"todo created"
            })
        }else{
            res.json({
                status:400,
                msg:"todo not created"
            })
        }

    }
    static deleteTodo=async(req,res)=>{
        const {id}=req.params;
        const isDeleted=await TodoModel.findByIdAndDelete({_id:id})
        if(isDeleted){
            res.json({
                status:201,
                msg:"todo deleted"
            })
        }else{
            res.json({
                status:400,
                msg:"todo not deleted"
            })
        }
        
    }

    static editTodo =async(req,res)=>{
        const {title,desc}=req.body

        const isEdited=await TodoModel.findByIdAndUpdate({_id:id},{
            $set:{
                title:title,
                desc:desc
            }
        })

        if(isEdited){
            res.json({
                status:201,
                msg:"todo deleted"
            })
        }else{
            res.json({
                status:400,
                msg:"todo not deleted"
            })
        }
        
    }
}
module.exports=TodoControllers