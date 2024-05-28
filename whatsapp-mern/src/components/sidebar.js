import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../css/sidebar.css'
import { Avatar, IconButton } from '@material-ui/core';
import ChatView from './sidebarChat';
 
function sidebar(){
    return(
        <div className="sidebar">
            <div className="sideHeader">
            <Avatar src="https://playmatestoys.com/uploads/brand/Ben10_brandsplash_header_green_11.19.jpg" />
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            </div>
            <div className="search">
                <div className="sidebar_search">
                    
                    <input type="text" placeholder="search or type new chat"  />
                    
                    
                </div>
            </div>
            <div className="sidebarChat">
                <ChatView />
                <ChatView />
                <ChatView />
            </div>
        </div>
    ) 
}


export default sidebar