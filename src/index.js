import express from "express";
import dotenv from "dotenv";
import connectDB from './db/index.js';
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { uploadOnCloudinary } from "../src/utils/cloudinary.js"

const app = express();

app.use(express.json());
dotenv.config({ path: "./env" });

const port = process.env.PORT || 4000;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at port : ${port}`);
        })
        app.on("error", (error) => {
            console.log(`ERRR : ${error}`);
            throw error
        })
    })
    .catch((err) => {
        console.error(`MongoDB connection failed !!! ${err}`)
    })


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Now you can use __dirname to construct your file path
const filePath = path.join(__dirname, '../public/temp/Dabdab.png');
uploadOnCloudinary(filePath);

export default app;