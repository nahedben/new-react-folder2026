import { useState } from 'react'

import ChatInput from './assets/components/ChatInput.jsx'
import { ChatMessages } from './assets/components/ChatMessages.jsx'
import './App.css'



function App(){
      const [chatMessages,setChatMessages]=useState([
          {
          message:"hello chatbot",
          sender:"user",
          id:"id1"
        },
          {
          message:"Hello! How can I help you?",
          sender:"robot",
          id:"id2"
        },
          {
          message:"can you get me the date today",
          sender:"user",
          id:"id3"
        }
        ,
          {
          message:"Today is September 26",
          sender:"robot",
          id:"id4"
        }
      ])
  return(
          <>
           <div className="main-container">
           
           <ChatMessages chatMessages={chatMessages}/>
           
           <ChatInput chatMessages={chatMessages}
                       setChatMessages={setChatMessages}/>
                       </div>
          </>
        )
    
    };

export default App
