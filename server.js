import express from "express";

const app = express();
const port = 4000;

app.get("/",(req,res)=>{
    res.send(`Bikey. Wheels for your moments!`);
})

app.listen(port, () => {
    console.log(`Bikey app listening on port ${port}`)
  })