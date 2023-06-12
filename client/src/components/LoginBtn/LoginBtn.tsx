import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/LogIn';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext} from 'react'
import {  UserContextType,} from '../../context/CurrentUserContext'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import './LoginBtn.css'



export default function LoginBtn() {
  

  const {logout, loggedInUser } = useContext(UserContextType);
  

  const handleLogout = async () => {
    
    
    await logout();
    
   
      alert('You are logged out ');
     
    
    
  };

  
  return (
    <>
      {loggedInUser?.isAdmin === false ? (
        <div className='LoginBtnContainer'>
        <Button size="small" variant="text" startIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </Button>

        <Link to="/login">
          <AccountCircleIcon/>
        </Link>
        
        </div>
      ) :  loggedInUser ? (
        <div className='LoginBtnContainer'>
        <Button variant="text" startIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </Button>
        <Link to="/login">
          <AccountCircleIcon/>
        </Link>
        <Link to="/admin">
          <AdminPanelSettingsIcon/>
        </Link>
        
        </div>

        ) : (
        <div className='LoginBtnContainer'>
            <Link to="/login">
          <Button variant="text" startIcon={<LoginIcon />}>
            LogIn
          </Button>
        </Link>
        </div>
        
       )}
    </>
     
  )
}
