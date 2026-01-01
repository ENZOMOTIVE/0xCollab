
import WebSocket, { WebSocketServer } from "ws";

import http from "http";



// In Ws the First Connection has to be a http 

//const Server = http.createServer(
//    function(request: any, response: any) {
//    console.log((new Date()) +"received Request for "+ request.url)
//    response.end("Hi There")
//}
//)

const Server = http.createServer()

// Websocket initialization

// const wss = new WebSocketServer({noServer: true})

 const wss = new WebSocketServer({server: Server})

 let userCount = 0

// Connection Event

 wss.on("connection", function connection(Socket) {

    Socket.on('error', (err) => console.error(err))

    // Broadcasting message to all the connected clients
    Socket.on("message", function message(data, isBinary) {
        wss.clients.forEach(function each(client){
            if(client.readyState == WebSocket.OPEN ){
                client.send(data, {binary: isBinary})
            }
        } )
    })
      console.log("User Connected",++userCount)

    Socket.send("Hello Message from the server")

 })

 

Server.listen(8080, ()=> {
    console.log((new Date()) +" Running on port 8080")
})