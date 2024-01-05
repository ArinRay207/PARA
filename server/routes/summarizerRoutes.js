import express from 'express'
import { createNoteController, deleteNoteController, getNotesController, updateNoteController } from '../controller/noteController.js';
import { getSummaryController } from '../controller/getSummaryController.js';
const router = new express.Router();

router.post("/get-summary", getSummaryController);

export default router;