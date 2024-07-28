const TodoModel=require("../models/TodosModel")
const AuthModel=require("../models/AuthModel")


class TodoControllers{

    //create a todo
    static createTodo=async(req,res)=>{
        const {desc,userId}=req.body

        const newTodo=new TodoModel({
            
            desc:desc,
            owner:userId
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

    // delete a todo
    static deleteTodo=async(req,res)=>{
        const {todoId}=req.params;
        const {userId}=req.params;
        // console.log(userId)
        const isDeleted=await TodoModel.findByIdAndDelete({_id:todoId})
        

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

    //editing a todo
    static editTodo =async(req,res)=>{
        const {status}=req.body
        const{todoId}=req.params;

        console.log(status)

        const isEdited=await TodoModel.findByIdAndUpdate({_id:todoId},{
            $set:{
                status:status
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

    // to get a single todo
    static getTodo=async(req,res)=>{
        const {todoId}=req.params;
        const dbRes=await TodoModel.findById({_id:todoId});
        if(dbRes){
            res.json({
                status:200,
                msg:"todo found",
                data:dbRes
            })
        }else{
            res.json({
                status:400,
                msg:"todo not found"
            })
        }
    }


    //get all todos 

    static getAlltodo=async(req,res)=>{
        const{userId}=req.body;
      

        const allTodos=await TodoModel.find({
            owner:userId
        })

        if(allTodos){
            res.json({
                status:200,
                todos:allTodos,
                msg:"todos found"
            })
        }else{
            res.json({
                status:400,
                todos:[],
                msg:"todos not found"
            })
        }
    }



    //delete all todo
    static deleteAllTodo=async(req,res)=>{
        const {userId}=req.params;
        const isDeleted=await TodoModel.deleteMany({owner:userId})
        const popTodos=await AuthModel.findByIdAndUpdate({_id:userId},{
            $set:{todos:[]}
        })

        const allDone=await Promise.all([isDeleted,popTodos])
        console.log(allDone)
        if(allDone){
            res.json({
                msg:"all todos deleted",
                status:200
            })
        }else{
            res.json({
                msg:"todos not deleted",
                status:400
            })
        }
    }
}
module.exports=TodoControllers