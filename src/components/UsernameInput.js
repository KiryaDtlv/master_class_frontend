import { useState } from 'react';

export const UsernameInput = ({ setUsername }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setUsername(name.trim());
    }
  };

  const getAvatarColor = (name) => {
    const colors = ['#ff80ab', '#82b1ff', '#b9f6ca', '#ffd180', '#ea80fc'];
    return colors[name.length % colors.length];
  };

  return (
    <div className="username-container">
      <form onSubmit={handleSubmit} className="username-form">
        {name && (
          <div
            className="avatar-preview"
            style={{ backgroundColor: getAvatarColor(name) }}
          >
            {name[0]?.toUpperCase()}
          </div>
        )}
        <input
          type="text"
          placeholder="Введите ваше имя..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">🚀 Войти</button>
      </form>
    </div>
  );
};
