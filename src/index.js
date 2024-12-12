import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDataBase } from "./config/db.js";

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
    res.status(200).send(`Bikey. Wheels for your moments!`);
})

connectToDataBase().then(() => {
    app.listen(port, () => {
        console.log(`Bikey app running on port ${port}`)
    })
})

export default app;