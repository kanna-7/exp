const express = require("express");


const app = express();


app.get("/ping",(req,res)=>{
    res.send("!pong");
})

app.listen(8080,()=>{
    console.log("connected to server sucessfully")
})