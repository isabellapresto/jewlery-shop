import { TextField, Button } from "@mui/material";
import './LoginForm.css';
import {  UserType, UserContextType,  } from '../CurrentUserContext'
import { useContext, useState } from 'react'



export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const {login, logout, loggedInUser} = useContext(UserContextType);

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const user: UserType = {
            email,
            password
        }
        
        await login(user)
      
    }
    
    return(
        <form onSubmit={handleLogin}>
        <TextField id="standard-basic" label="email" value= {email} onChange={(e) => setEmail(e.target.value)} variant="standard" /> <br/>
        <TextField id="standard-basic" label="password" value = {password} onChange={(e) => setPassword(e.target.value)} variant="standard" /> <br/>
        <Button variant="outlined" type = "submit">Log In</Button>
        </form>
        
    )
    
}



