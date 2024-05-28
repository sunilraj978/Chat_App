import { Avatar, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "../css/chat.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import axios from "./axios";

function Chat({ messages }) {
  const [input, setinput] = useState("");

  const name = localStorage.getItem("name");

  const sentMessage = async (e) => {
    e.preventDefault();
    await axios.post("/message", {
      name: name,
      message: input,
      receive: false,
      timestamp: new Date().toUTCString(),
    });
    setinput("");
  };

  return (
    <div className="chat">
      <div className="chatTop">
        <Avatar />
        <div className="chatHeader">
          <h4 style={{ marginTop: "-0px" }}>Room name</h4>
          <p style={{ color: "grey", fontSize: "12px", marginTop: "-20px" }}>
            Last seen...
          </p>
        </div>
        <div className="headerIcon">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
        {messages.map((message) => (
          <div>
            {message.name !== name ? (
              <p className="text">
                <span className="name">{message.name}</span>
                {message.message}
                <span className="date">{message.timestamp}</span>
              </p>
            ) : (
              <p className="text receiver">
                <span className="name">{message.name}</span>
                {message.message}
                <span className="date">{message.timestamp}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="message">
        <div className="messages">
          <form>
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
              placeholder="Type a message"
            />
            <button onClick={sentMessage} style={{ display: "none" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
