const express=require("expres");
const NoteControllers=require("../controllers/NoteControllers")
const noteRouter=express.Router()

noteRouter.post("/createNote",NoteControllers.createNote)
noteRouter.post("/deleteNote",NoteControllers.deleteNote)
noteRouter.post("/editNote",NoteControllers.editNote)




module.exports=noteRouter