import { Button, Icon } from '@mui/material';
import { NavLink } from "react-router-dom";
import LoginIcon from '@mui/icons-material/LogIn';

export default function LoginBtn() {
  return (
    <>
      <NavLink to="/login">
        <Button variant="outlined" startIcon={<LoginIcon />}>
          LogIn
        </Button>
      </NavLink>
    </>
  );
}
