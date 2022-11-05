import express from "express";
// import socketio from "socket.io";


const app = express()

app.get('/',(req,res) => {
    res.json({
        msg: "server running"
    })
})

app.listen(5000,()=>console.log('Server running on port 5000'))