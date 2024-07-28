const express=require("express");
const NoteControllers=require("../controllers/NoteControllers")
const noteRouter=express.Router()

noteRouter.post("/createNote",NoteControllers.createNote)
noteRouter.delete("/deleteNote/:noteId/:userId",NoteControllers.deleteNote)
noteRouter.put("/editNote/:noteId",NoteControllers.editNote)
noteRouter.get("/getSingleNote/:noteId",NoteControllers.getSingleNote);
noteRouter.get("/getAllNotes/:userId",NoteControllers.getAllNotes)
noteRouter.delete("/deleteAllNotes/:userId",NoteControllers.deleteAllNotes)






module.exports=noteRouter