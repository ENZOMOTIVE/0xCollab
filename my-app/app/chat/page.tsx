"use client"
import { useEffect, useState } from "react"
import { Message, WebSocketConnection } from "../websocket";



export default  function ChatRoom()  {

    const [input_text, setInput_text ] = useState("");

    const [message, setmessage] = useState<string[]>([])


  useEffect(() => {
    const ws = WebSocketConnection()

    ws.onmessage = (msg) => {
    setmessage(prev => [...prev, msg.data]);
    }

  }, [])

    return(
       <div className="flex flex-col w-screen h-screen   items-center bg-gray-400" >

            



            <h2>Message Log:</h2>
              <div className="bg-yellow-400 h-450 w-350 m-2 p-2">
                  {
                    message
                  }
                    

            </div>

            <div className="bg-gray-400 m-2 p-2   ">
                <input className="text-black text-bold bg-white" type="text" value={input_text} onChange={(e) => {setInput_text(e.target.value)}} />
                <button className="p-2 m-2 bg-blue-500 text-white rounded" onClick={() => {Message(input_text); setInput_text("")}}> Send</button>
            </div>
       </div>

    )
}