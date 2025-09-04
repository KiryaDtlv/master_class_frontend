const getColorFromName = (name) => {
  const colors = ['#ff80ab', '#82b1ff', '#b9f6ca', '#ffd180', '#ea80fc'];
  return colors[name.length % colors.length];
};

export const MessageList = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((msgObj, idx) => {
        const { user, text } = msgObj;
        return (
          <div className="message-bubble" key={idx}>
            <div
              className="avatar"
              style={{ backgroundColor: getColorFromName(user) }}
            >
              {user[0].toUpperCase()}
            </div>
            <div className="message-content">
              <div className="username">{user}</div>
              <div className="text">{text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};


