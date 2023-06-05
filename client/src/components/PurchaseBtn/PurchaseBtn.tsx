import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import './PurchaseBtn.css';
import { useShoppingCart } from '../../context/CartContext';
import { Product } from '../../context/ProductContext';

type Props = {
  product: Product;
}

export default function PurchaseBtn({ product }: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart();

  const quantity = getItemQuantity(product._id);

  return quantity === 0 ? (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={() => increaseCartQuantity(product._id)}>
        Add to cart
      </Button>
    </Box>
  ) : (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
        <Button variant="outlined" onClick={() => decreaseCartQuantity(product._id)}>-</Button>
        <div>
          <span>{quantity}</span> in cart
        </div>
        <Button variant="outlined" onClick={() => increaseCartQuantity(product._id)}>+</Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Button variant="outlined" onClick={() => removeFromCart(product._id)}>Remove</Button>
      </Box>
    </Box>
  );
  
}
