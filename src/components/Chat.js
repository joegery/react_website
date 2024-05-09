// components/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001'); 

export default function Chat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([{ user: 'Trainer', text: 'Hello! How can I help you today?' }]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat(prevChat => [...prevChat, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const userMessage = { user: 'You', text: message };
      socket.emit('chat message', userMessage); 
      setChat(chat => [...chat, userMessage]); 
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <ul>
        {chat.map((msg, index) => (
          <li key={index} className={msg.user.toLowerCase()}>
            <strong>{msg.user}:</strong> {msg.text}
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
