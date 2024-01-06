import React from "react";
import PropTypes from "prop-types";

const MessageHistory = ({ messages, username }) => {
  return (
    <ul className="message-list">
      {messages.map(({ username: messageUsername, text }, index) => (
        <li
          key={index}
          className={
            messageUsername === username
              ? "message sender"
              : "message recipient"
          }
        >
          <p>{`${messageUsername}: ${text}`}</p>
        </li>
      ))}
    </ul>
  );
};

MessageHistory.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default MessageHistory;
