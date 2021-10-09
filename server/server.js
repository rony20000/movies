import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { auth, getMovie, protect } from "./utils.js";
import { cache } from "./db.js";

dotenv.config()
const PORT = process.env.PORT || 5000;
const app = express()
app.use(cors())
app.use(express.json())

app.get("/:title/:year/:type",  cache, getMovie)

app.post("/login", auth)

app.get("/", (req, res) => {
    res.send("api started")
})

app.listen(5000, () => {
    console.log(`App listening on port ${PORT}`);
});