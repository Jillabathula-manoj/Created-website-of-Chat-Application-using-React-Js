// src/components/ChatInput.js
import React, { useState } from 'react';

const ChatInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="Type your message..." />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
