const express=require("express");
const NoteControllers=require("../controllers/NoteControllers")
const noteRouter=express.Router()

noteRouter.post("/createNote",NoteControllers.createNote)
noteRouter.delete("/deleteNote/:noteId",NoteControllers.deleteNote)
noteRouter.put("/editNote/:noteId",NoteControllers.editNote)
noteRouter.get("/getSingleNote/:noteId",NoteControllers.getSingleNote);
noteRouter.delete("/deleteAllNotes",NoteControllers.deleteAllNotes)






module.exports=noteRouter