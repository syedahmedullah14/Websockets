import express from "express";
import { WebSocketServer } from "ws"

const app = express();
const port =  8080;

app.listen(port, () =>{
    console.log("Server is listening...");
})