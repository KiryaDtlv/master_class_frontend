import { useState } from 'react';

const emojis = ['😀', '😂', '🎉', '🥳', '😎', '👍', '❤️'];

export const MessageInput = ({ username, onSend }) => {
  const [text, setText] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend({ user: username, text })
      setText("");
    }
  };

  return (
    <form onSubmit={sendMessage} className="input-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Напиши что-нибудь весёлое 😄"
      />
      <div className="emoji-bar">
        {emojis.map((emoji) => (
          <span
            key={emoji}
            onClick={() => setText((t) => t + emoji)}
            className="emoji"
          >
            {emoji}
          </span>
        ))}
      </div>
      <button type="submit">📨</button>
    </form>
  );
};
