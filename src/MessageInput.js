import React, { useState } from "react";
import PropTypes from "prop-types";

const MessageInput = ({ onPostMessage }) => {
  const [msg, setMsg] = useState("");

  const isDisabled = () => {
    return msg === "";
  };

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPostMessage(msg);
    setMsg("");
  };

  return (
    <div>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={msg}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

MessageInput.propTypes = {
  onPostMessage: PropTypes.func.isRequired,
};

export default MessageInput;
