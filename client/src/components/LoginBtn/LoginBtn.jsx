import Button from '@mui/material/Button';

import { NavLink } from "react-router-dom";




export default function LoginBtn(){

    return(
        <NavLink to='/login'>
            <Button variant="outlined">LogIn</Button>
            
        </NavLink>
        
        
    )
}
