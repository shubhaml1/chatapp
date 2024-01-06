import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./logo.svg";
import ChatWindow from "./ChatWindow";

const App = () => {
  const users = [{ username: "Shubham" }, { username: "Satyam" }];

  const [messages, setMessages] = useState([]);

  const postMessage = (msg) => {
    console.log(msg);
    setMessages((prevMessages) => [...prevMessages, msg]);
  };

  useEffect(() => {
    // You can fetch initial messages here if needed
    // For example, an API call to get initial messages
    // const initialMessages = fetchMessages();
    // setMessages(initialMessages);
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
        <p>Exercise 2 - All Together</p>
      </header>
      <main className="App-main">
        <div className="container">
          {users.map((user) => (
            <ChatWindow
              key={user.username}
              username={user.username}
              messages={messages}
              onPostMessage={postMessage}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
