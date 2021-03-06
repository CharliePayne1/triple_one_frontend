import React, {useState}from 'react'

export default function LogIn ({handleSubmit}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form className = "loginForm" onSubmit={(e) => handleSubmit(e, username, password)}>
            <img className="doctor_avatar" src="https://cdn2.iconfinder.com/data/icons/avatar-business-people-set-one/128/avatar-25-512.png" alt="" ></img>
            <input
            className="curvedInputField"
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}/>

            <input
            className="curvedInputField"
            type="password" 
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}/>

            <input
            className="button"
            type="submit"
            value="log in"/>
        </form>
    );
}