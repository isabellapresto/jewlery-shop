import { Button, Popover, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/LogIn';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext, useState } from 'react';
import { UserContextType } from '../../context/CurrentUserContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import './LoginBtn.css';

export default function LoginBtn() {
  const { logout, loggedInUser } = useContext(UserContextType);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleLogout = async () => {
    await logout();
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
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

          <Popover
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>You are logged out</Typography>
          </Popover>
        </div>
      ) : loggedInUser ? (
        <div className='LoginBtnContainer'>
          <Link to="/">
            <Button variant="text" startIcon={<LogoutIcon />} onClick={handleLogout}>
              Logout
            </Button>
          </Link>

          <Link to="/login">
            <AccountCircleIcon/>
          </Link>
          
          <Link to="/admin">
            <AdminPanelSettingsIcon/>
          </Link>

          <Popover
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>You are logged out</Typography>
          </Popover>
        </div>
      ) : (
        <div className='LoginBtnContainer'>
          <Link to="/login">
            <Button variant="text" startIcon={<LoginIcon />}>
              LogIn
            </Button>
          </Link>

          <Popover
            open={popoverOpen}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>You are logged out</Typography>
          </Popover>
        </div>
      )}
    </>
  );
}
