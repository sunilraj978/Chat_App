import { Avatar } from '@material-ui/core';
import React from 'react';


function ChatView(){
    return(
        <div className="avatar">
            <Avatar />
            <div className="contents">
                <h4>Room name</h4>
                <p>This is Last Message</p>
                
            </div>
        </div>
    )
}

export default ChatView