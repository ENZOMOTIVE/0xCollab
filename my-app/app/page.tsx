"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";
import {WebSocketConnection } from "./websocket";


export default function Home() {

  const [message, setmessage] = useState("")
  const navigate = useRouter()





  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main >
        <h1>This is Random Chat Room</h1>

            <button
              className="p-2 m-2 bg-green-500 text-white rounded"
              onClick={() => {

                WebSocketConnection()
                setmessage("Websocket Pressed ")

              }}

            >

              Connect to the Websocket
            </button>
          

        <button
          className="p-2 m-2 bg-amber-500 text-white rounded"
          onClick={() => {
            setmessage("Chat Room Button Pressed ")
            navigate.push('/chat')

          }}>


          Enter the Chat Room
        </button>

        <button
          className="p-2 m-2 bg-amber-500 text-white rounded"
          onClick={() => {
            setmessage("Chat Room Button Pressed ")
            navigate.push('/biodata')

          }}>


          SRK Padhy
        </button>

        <div className="bg-gray-200 h-40 w-full p-2 m-2 text-black rounded ">
          <h2>Console Logs</h2>
          <p> {message}</p>
        </div>


      </main>
    </div>
  );
}
