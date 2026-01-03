
let wss: WebSocket | null = null

export  function WebSocketConnection()  { 
    
    if(wss) { return wss}

    wss = new WebSocket ("ws://localhost:8080")
    
    wss.onopen = (() => {

        console.log("Server is running")
    

    })

    wss.onmessage = (message) => {
        console.log(message.data)
    }


    wss.onclose = (() => {
        console.error("err")
    })


    return wss
}


export function Message(message: string) {
    if(wss! && wss.readyState === WebSocket.OPEN){
        wss.send(message);
    } else{
        console.log("Socket not connected")
    }
}

