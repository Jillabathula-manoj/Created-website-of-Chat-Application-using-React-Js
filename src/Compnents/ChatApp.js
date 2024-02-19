// src/components/ChatApp.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (text) => {
    const newMessage = {
      sender: 'User',
      text: text,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1>Chat Application</h1>
      <ChatInput onSubmit={handleMessageSubmit} />
      <MessageList messages={messages} />
    </div>
  );
};

export default ChatApp;
