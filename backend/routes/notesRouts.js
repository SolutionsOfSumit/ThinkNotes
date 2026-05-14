import express from "express"

const router = express.Router();

router.get("/", (req,res) => {
    status(200).send("You have 10 notes")
})

router.post("/", (req,res) => {
    status(200).send("Note Created")
})

router.put("/:id", (req,res) => {
    status(201).send("Note Updated")
})

router.delete("/:id", (res,req) => {
    status(200).send("Note has been deleted")
})

export default router;