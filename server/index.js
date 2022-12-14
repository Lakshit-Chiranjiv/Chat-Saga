import express from "express";
import http from 'http'
import { Server } from "socket.io";

const app = express()

const server = http.createServer(app)

const io = new Server(server)

app.get('/',(req,res) => {
    res.json({
        msg: "server running"
    })
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(5000,()=>console.log('Server running on port 5000'))