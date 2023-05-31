import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import './PurchaseBtn.css';

const handleClick = (event : any) => {
  event.preventDefault();
}

export default function PurchaseBtn() {
  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent:'center', marginBottom: '1rem'}}>
       <Button variant="outlined"  onClick={handleClick} startIcon={<AddShoppingCartIcon />} >
        Add to cart
      </Button>
    </Box>
  );
}