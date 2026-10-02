import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage.jsx";


export function ChatMessages({chatMessages}) {
 const chatMessagesRef= useRef(null)


useEffect(()=>{
  const containerElm=chatMessagesRef.current;
  // console.log(containerElm)
  if(containerElm){
    containerElm.scrollTop=containerElm.scrollHeight
  }
},[chatMessages])
return (
        <div className="chat-message-container"
              ref={chatMessagesRef}>
        
 {chatMessages.map((msg)=>{
         
          return (<ChatMessage 
                    message={msg.message} 
                    sender={msg.sender}
                    key={msg.id}
                    
                  />)
        })}
      </div>
      )
    
    }