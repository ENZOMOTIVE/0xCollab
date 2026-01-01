"use client"
import { useState } from "react"



export default  function ChatRoom()  {

    const [input_text, setInput_text ] = useState("");

    return(
       <div className="flex flex-col w-screen h-screen   items-center bg-gray-400" >

            



            <h2>Message Log:</h2>
              <div className="bg-yellow-400 h-450 w-350 m-2 p-2">
                    

            </div>

            <div className="bg-gray-400 m-2 p-2   ">
                <input className="text-black text-bold bg-white" type="text"  />
                <button className="p-2 m-2 bg-blue-500 text-white rounded" onClick={() => {console.log("Message Sent")}}> Send</button>
            </div>
       </div>

    )
}