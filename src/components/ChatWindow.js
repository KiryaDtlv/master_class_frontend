import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export const ChatWindow = ({ ws, messages, username }) => {
  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <MessageInput ws={ws} username={username} />
    </div>
  );
};
