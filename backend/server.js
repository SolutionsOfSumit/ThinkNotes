import express from "express"
import notesRouts from "./routes/notesRouts.js"

const app = express()

// app.use("/api/notes" router)
// app.get("/api/notes", (req,res) => {
//     res.status(200).send("You have 10 notes")
// })

// app.post("/api/notes", (res,req) => {
//     status(201).json({message:"Note created successfully "})
// })

// app.put("/api/notes/:id", (res,req) => {
//     status(200).json({message:"Note updated successfully"})
// })

// app.delete("/api/notes/:id", (res,req) => {
//     status(200).json({message: "Your note has been deleted"})
// })

app.listen(5001, () => {
    console.log("Server started on PORT:5001");
})