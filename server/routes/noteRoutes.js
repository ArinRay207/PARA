import express from 'express'
import { createNoteController, deleteNoteController, getNotesController, updateNoteController } from '../controller/noteController.js';
const router = new express.Router();

router.post("/create-note", createNoteController);
router.get("/get-notes", getNotesController)
router.put("/update-note/:nid", updateNoteController);
router.delete("/delete-note/:nid", deleteNoteController);

export default router;