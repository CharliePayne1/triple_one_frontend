import './App.css';
import Public from './Public'
import Private from './Private'
import React, {useState, useEffect} from "react";
import API from './API'

const App = () => {
  const [username, setUsername] = useState("")

  useEffect(() => {
    if (localStorage.token) {
      API.validate(localStorage.token)
      .then(json => setUsername(json.username))
    }
  }, [])

  const handleSubmit = (e, username, password) => {
    e.preventDefault();

    API.logIn({username, password})
    .then(json => { 
      if (json.username) {
      setUsername(json.username)
      localStorage.token = json.token}
      else {
        alert("Invalid username or password. Please try again.")
        setUsername("")
      }
    })
    .catch(error => console.log(error.message));
  }

  const logout = () => {
    setUsername("")
    localStorage.removeItem("token")
  }

  return (
    <div className="App">
          {!username ? < Public className="public" handleSubmit={handleSubmit}/> : < Private logout={logout}/>}
    </div>
  );
}

export default App;
