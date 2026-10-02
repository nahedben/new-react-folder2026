import  robotProfile from '../robot.png';
import userProfile from '../sender.png';

export  const ChatMessage = (props) => {

       let {message, sender}=props
        
        
        return (
          <>
            <div className={sender==='user'
                            ? 'chat-message-user'
                            : 'chat-message-robot'
                          }>
              {sender === "robot" && (
                <img src={robotProfile} 
                  alt="robot image" 
                  className="profile"
                />
              )}
             <div className="chat-message-text"> {message}</div>
              {sender === "user" && (
                <img src={userProfile} 
                  alt="user image" 
                   className="profile"
               />
              )}
            </div>
          </>
        );
      };
