import express from "express";

const app = express();


app.use("/",(req,res)=>{
    res.send(`Bikey. Wheels for your moments!`);
})