const NoteModel = require("../models/NotesModel");
const AuthModel = require("../models/AuthModel");

class NoteControllers {

    //creating a single note
    static createNote = async (req, res) => {
        const { title, desc, userId } = req.body;

        const newNote = new NoteModel({
            title: title,
            desc: desc,
            owner: userId
        })
        const isCreated = await newNote.save()

        if (isCreated) {
            let isPushed = await AuthModel.findByIdAndUpdate({ _id: userId }, {
                $push: {
                    notes: isCreated._id
                }
            })

            if (isPushed) {
                res.json({
                    msg: "note created",
                    status: 201
                })
            } else {
                res.json({
                    msg: "note not created",
                    status: 400
                })
            }

        } else {
            res.json({
                msg: "note not created",
                status: 400
            })
        }

    }



    //deleting a single note
    static deleteNote = async (req, res) => {
        const { noteId } = req.params;
        const { userId } = req.body;

        const isDeleted = await NoteModel.findByIdAndDelete({ _id: noteId })
        if (isDeleted) {
            let isPull = await AuthModel.findByIdAndUpdate({ _id: userId }, {
                $pull: { notes: noteId }
            })

            if (isPull) {
                res.json({
                    msg: "note pulled",
                    status: 200
                })
            } else {
                res.json({
                    msg: "note not pulled",
                    status: 400
                })
            }
        }else{
            res.json({
                msg: "note notdeleted",
                status: 400
            })
        }

    }


    static editNote = async (req, res) => {
        const {newtitle, newDesc}=req.body;
        const {noteId}=req.params;

        const isEdited=await NoteModel.findByIdAndUpdate({_id:noteId},{
            $set:{title:newtitle,desc:newDesc}
        })

        if(isEdited){
            res.json({
                msg:"note edited ",
                status:200
            })
        }else{
            res.json({
                msg:"note not updated",
                status:400
            })
        }

    }


    static getSingleNote = async (req, res) => {
        const {noteId}=req.params;

        const note=await NoteModel.findById({_id:noteId});
        console.log(note)
        if(note){
            res.json({
                status:200,
                data:note,
                msg:"note found"
            })
        }else{
            res.json({
                status:200,
                data:null,
                msg:"not not found"
                
            })
        }

    }


    static deleteAllNotes = async (req, res) => {
        const {userId}=req.body;

        const areDeleted=await NoteModel.deleteMany({owner:userId});
        if(areDeleted){
            const arePulled=await AuthModel.findByIdAndUpdate({_id:userId},{
                $set:{
                    notes:[]
                }
            })
            if(arePulled){
                res.json({
                    msg:"all notes deleted",
                    status:200
                })
            }else{
                res.json({
                    msg:"error in pulling",
                    status:400
                })
            }
        }else{
            res.json({
                msg:"notes not deleted",
                status:400
            })
        }
    }
}

module.exports = NoteControllers;