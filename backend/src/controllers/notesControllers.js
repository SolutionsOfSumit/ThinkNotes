import Note from "../models/Notes.js"

export async function getAllNotes(req,res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1})  //Newest first
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({ message: "Internal server error" })
    }
}  

export const getNoteById = async (req,res) => {
    try {
        const note =await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note does not found"})
        res.status(200).json(note)
    } catch (error) {
        
    }
}
export async function createNote(req,res) {
try {
    const {title, content} = req.body
    const note = new Note ({title, content:content})
    const savedNote = await note.save()
    res.status(201).json(savedNote)
} catch (error) {
    console.error("Error in createNotes controller", error)
    res.status(500).json({ message: "Internal server error" })
}
}

export async function updateNote(req,res) {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content}, {new:true})
        if (!updatedNote) return res.status(404).json({ message: "Note not found" }) 
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updateNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteFunction = async (req,res) => {
    try {
        const deletedNote =await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({ message: "Note not found"})
        res.status(200).json({message:"The note has been deleted"})
    } catch (error) {
        console.error("Error in  deleteFunction controller")
        res.status(500).json({message: "Internal server error"})
    }
}  