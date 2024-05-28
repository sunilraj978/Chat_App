import React, { useEffect, useState } from "react";
import Chat from "./components/chatBox";
import Sidebar from "./components/sidebar";
import Pusher from "pusher-js";
import "./css/App.css";
import axios from "./components/axios";
import Name from "./components/name";

function App() {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    axios.get("/get").then((response) => {
      setMessage(response.data);
    });
    const pusher = new Pusher("b872e7e015b514bfa26e", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessage([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      {localStorage.getItem("name") ? (
        <div className="appBody">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      ) : (
        <Name />
      )}
    </div>
  );
}

export default App;
