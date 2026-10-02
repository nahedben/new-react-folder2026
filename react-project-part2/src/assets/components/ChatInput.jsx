import { useState } from "react";
import { Chatbot } from "supersimpledev";


const ChatInput = ({chatMessages,setChatMessages}) => {
const [inputText, setInputText]=useState('')
const [isLoading,setIsLoading]=useState(false)



const saveInputText = (event)=>{
  // console.log("Input  Text",event.target.value)
setInputText(event.target.value)
}

const  sendMessage= async ()=>{  
  setIsLoading(true)
  console.log("input text",inputText)
  const newChatMessages  =[...chatMessages,{message:inputText,
                                            sender:'user' ,
                                            id:crypto.randomUUID()}
                  ];


 const response = await Chatbot.getResponseAsync(inputText)
 const isLoadingInit=await setIsLoading(false)

if(!isLoading){
 setChatMessages(
 
    [...newChatMessages,{message:response,
                                         sender:'robot' ,
                                         id:crypto.randomUUID()}
                                         
                 ]);
setInputText('')
}
           
}
        return (
          <>
          {isLoading && <p> Is loading </p>}
          
          {<div className="chat-input-container">
            <input className="inpt-text"
             onChange={saveInputText} 
             type="text" 
              placeholder="Send message to the AI"
              size="30" 
              value={inputText}
            />
            <button className="btn" 
                    onClick={sendMessage}
                    disabled={isLoading || inputText.trim()===''}
             >Send
             </button>
          </div>})
          </>
        );

        
      };
      export default ChatInput;