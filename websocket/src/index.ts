
import WebSocket, { WebSocketServer } from "ws";

import http from "http";


// In Ws the First Connection has to be a http 
const Server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) +"received Request for "+ request.url)
    response.end("Hi There")
})




// Websocket initialization

// const wss = new WebSocketServer({noServer: true})

 //const wss = new WebSocketServer({server: Server})



Server.listen(8080, ()=> {
    console.log("Server Running on port 8080")
})