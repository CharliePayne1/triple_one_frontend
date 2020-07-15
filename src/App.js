import './App.css';
import Public from './Public'
import Private from './Private'
import React, {useState} from "react";

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className="App">
      <h1>Triple One</h1>

        <input 
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}/>

        <input
          type="text" 
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}/>

          {!loggedIn ? < Public /> : < Private />}
    </div>
  );
}

export default App;
