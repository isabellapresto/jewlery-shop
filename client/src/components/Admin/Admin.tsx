import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Admin() {
  return (
    <div 
    style={{
      width: '50%',
      minHeight: '50vh', 
      margin: 'auto', 
      paddingTop:'50px', 
      paddingBottom:'50px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '2rem',
      }}>

      <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
        Admin Panel
      </Typography>

     <Stack direction='row' spacing={2}>

      <NavLink to="/addnewproduct" style={{textDecoration: "none" }}>
        <Button variant='outlined'>Add product</Button>
      </NavLink>

      <NavLink to="/adminproducts" style={{textDecoration: "none" }}>
        <Button variant='outlined'>Edit products</Button>
      </NavLink>

      <NavLink to="/adminorders" style={{textDecoration: "none"}}>
        <Button variant='outlined'>Admin orders</Button>
      </NavLink>
      
     </Stack>
    </div>
  );
}