import React, {useState}from 'react'

export default function LogIn ({handleSubmit}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form onSubmit={(e) => handleSubmit(e, username, password)}>
            <input 
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}/>

            <input
            type="password" 
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}/>

            <input type="submit" value="submit"/>
        </form>
    );
}