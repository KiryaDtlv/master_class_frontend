import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { useState } from 'react';

export const ChatWindow = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const handleSend = (data) => {
    setMessages(prev => [...prev, { user: data.user, text: data.text }]);
  };
  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput username={username} onSend={handleSend} />
    </div>
  );
};
