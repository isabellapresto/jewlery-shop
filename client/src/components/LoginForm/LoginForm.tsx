import { TextField, Button, Box  } from "@mui/material";
import './LoginForm.css';
import {  UserType, UserContextType } from '../CurrentUserContext'
import { useContext, useState } from 'react'


export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, loggedInUser, isAdmin } = useContext(UserContextType);

 
   
    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const user: UserType = {
            email,
            password
        }
        
        setEmail("");
        setPassword("");
        console.log(loggedInUser?.firstName);
        
        isAdmin(user) 
        await login(user)   
      
    }


    return(
     
        <>
          {loggedInUser?.isAdmin == true ? (
            <Box sx={{ width: "85%", opacity: 0.8, display: 'flex', alignItems: 'center', margin: 'auto', marginTop: 10, marginBottom: 10 }}>
              <div className='imgContainer'>
                <div className='centered'>ADMINISTRATÖR</div>
                <img src="https://lilyandrose.se/wp-content/uploads/2023/04/Banner_miranda-collection.jpg" width={"85%"} />
              </div>
            </Box>
          ) : loggedInUser ? (
            <Box sx={{ width: "85%", opacity: 0.8, display: 'flex', alignItems: 'center', margin: 'auto', marginTop: 10, marginBottom: 10 }}>
              <div className='imgContainer'>
                <div className='centered'>Welcome!! You are logged in as {loggedInUser.firstName}</div>
                <img src="https://lilyandrose.se/wp-content/uploads/2023/04/Banner_miranda-collection.jpg" width={"85%"} />
              </div>
            </Box>
          ) : (
            <form onSubmit={handleLogin}>
              <Box sx={{ width: "50%", height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: "center", marginTop: 5, boxShadow: 3, borderRadius: 2, px: 4, py: 6 }}>
                <h1>Sign In</h1><br />
                <TextField required id="standard-required" fullWidth={true} label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <TextField required id="standard-required" fullWidth={true} label="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <Button fullWidth variant="outlined" type="submit">Sign In</Button> <br />
              </Box>
            </form>
          )}
        </>
      );
    }



