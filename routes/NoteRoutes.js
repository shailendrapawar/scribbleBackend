const express=require("express");
const NoteControllers=require("../controllers/NoteControllers")
const noteRouter=express.Router()

noteRouter.post("/createNote",NoteControllers.createNote)
noteRouter.delete("/deleteNote",NoteControllers.deleteNote)
noteRouter.put("/editNote",NoteControllers.editNote)
noteRouter.get("getSingleNote",NoteControllers.getSingleNote);
noteRouter.delete("/deleteAllNotes",NoteControllers.deleteAllNotes)






module.exports=noteRouter