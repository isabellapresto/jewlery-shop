import { Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import LoginIcon from '@mui/icons-material/LogIn';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext} from 'react'
import {  UserContextType,} from '../CurrentUserContext'


export default function LoginBtn() {

  const {logout, loggedInUser } = useContext(UserContextType);

  const handleLogout = async () => {
    
    
    await logout();
    
      alert('You are logged out ');
    
    
  };

  
  return (
    <>
      {loggedInUser ? (
        <>
        <Button variant="outlined" startIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </Button>
        
        </>
        ) : (
      
        <NavLink to="/login">
          <Button variant="outlined" startIcon={<LoginIcon />}>
            LogIn
          </Button>
        </NavLink>
       )}
    </>
     
  )
}
