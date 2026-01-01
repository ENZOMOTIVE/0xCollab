

export  function WebSocketConnection()  { 
    

    const wss = new WebSocket ("ws://localhost:8080")
    


    wss.onopen = (() => {

        console.log("Server is running")
    

    })

    wss.onclose = (() => {
        console.error("err")
    })



}