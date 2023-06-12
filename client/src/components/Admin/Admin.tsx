import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from "react-router-dom";

export default function Admin() {
  return (
    <div 
    style={{
      width: '50%', 
      margin: 'auto', 
      paddingTop:'50px', 
      paddingBottom:'50px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '2rem',
      }}>
    <h1>Admin Panel</h1>

     <Stack direction='row' spacing={2}>

      <NavLink to="/addnewproduct" style={{textDecoration: "none" }}>
        <Button variant='outlined'>Add new product</Button>
      </NavLink>

      <NavLink to="/adminproducts" style={{textDecoration: "none" }}>
        <Button variant='outlined'>Admin excisting products</Button>
      </NavLink>


      <Button variant='outlined'>Admin orders</Button>
     </Stack>
    </div>
  );
}