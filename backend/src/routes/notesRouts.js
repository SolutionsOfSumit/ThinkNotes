import express from "express"
import { createNote, deleteFunction, getAllNotes, updateNote, getNoteById } from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes )
router.get("/:id", getNoteById )
router.post("/", createNote)
router.put("/:id", updateNote)
router.delete("/:id", deleteFunction)

export default router;