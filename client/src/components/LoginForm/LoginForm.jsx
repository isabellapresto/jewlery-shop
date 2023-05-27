import { TextField, Button } from "@mui/material";
import './LoginForm.css';

export default function LoginForm() {
    return(
        <div>
        <TextField id="standard-basic" label="email" variant="standard" /> <br/>
        <TextField id="standard-basic" label="password" variant="standard" /> <br/>
        <Button variant="outlined">Log In</Button>
        </div>
        
    )
    
}



