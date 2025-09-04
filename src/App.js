import { useState, useEffect } from 'react';
import { ChatWindow } from './components/ChatWindow';
import { UsernameInput } from './components/UsernameInput';
import './App.css';

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <h1>Какой-то чат</h1>
      {!username ? (
        <UsernameInput setUsername={setUsername} />
      ) : (
        <ChatWindow username={username} />
      )}
    </div>
  );
}

export default App;
