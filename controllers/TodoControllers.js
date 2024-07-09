const TodoModel=require("../models/TodosModel")
const AuthModel=require("../models/AuthModel")
class TodoControllers{
    static createTodo=async(req,res)=>{
        const {title,desc,userId}=req.body

        const newTodo=new TodoModel({
            title:title,
            desc:desc
        })

        const isCreated=await newTodo.save()
        if(isCreated){
            const todoId=isCreated._id;
            const pushId=await AuthModel.findByIdAndUpdate({_id:userId},{
                $push:{todos:todoId}
            })
            if(pushId){
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
            
        }else{
            res.json({
                status:400,
                msg:"todo not created"
            })
        }

    }


    static deleteTodo=async(req,res)=>{
        const {todoId}=req.params;
        const {userId}=req.body;

        const isDeleted=await TodoModel.findByIdAndDelete({_id:todoId})
        // console.log(userId)

        if(isDeleted){
            const isPoped=await AuthModel.findByIdAndUpdate({_id:userId},{
                $pull:{todos:todoId}
            })

            if(isPoped){
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
            
        }else{
            res.json({
                status:400,
                msg:"todo not deleted"
            })
        }
        
    }

    static editTodo =async(req,res)=>{
        const {title,desc}=req.body
        const{todoId}=req.params;
        console.log(todoId);

        const isEdited=await TodoModel.findByIdAndUpdate({_id:todoId},{
            $set:{
                title:title,
                desc:desc
            }
        })

        if(isEdited){
            res.json({
                status:201,
                msg:"todo updated"
            })
        }else{
            res.json({
                status:400,
                msg:"todo not updated"
            })
        }
        
    }
}
module.exports=TodoControllers