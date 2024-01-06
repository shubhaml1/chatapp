import React from "react";
import MessageHistory from "./MessageHistory";
import MessageInput from "./MessageInput";
import PropTypes from "prop-types";

const ChatWindow = ({ username, messages, onPostMessage }) => {
  const composeMessage = (msg) => {
    const text = msg;
    const msgObject = {
      username,
      text,
    };
    onPostMessage(msgObject);
  };

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{username}</div>
      <MessageHistory messages={messages} username={username} />
      <MessageInput onPostMessage={composeMessage} />
    </div>
  );
};

ChatWindow.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onPostMessage: PropTypes.func.isRequired,
};

export default ChatWindow;
