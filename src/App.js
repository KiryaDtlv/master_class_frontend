import { useState, useEffect } from 'react';
import { ChatWindow } from './components/ChatWindow';
import { UsernameInput } from './components/UsernameInput';
import './App.css';

function App() {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws");
    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    setWs(socket);
    return () => socket.close();
  }, []);

  return (
    <div className="App">
      <h1>Какой-то чат</h1>
      {!username ? (
        <UsernameInput setUsername={setUsername} />
      ) : (
        <ChatWindow ws={ws} messages={messages} username={username} />
      )}
    </div>
  );
}

export default App;
