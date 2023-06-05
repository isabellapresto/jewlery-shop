import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import './Drawer.css'
import { useShoppingCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

interface ShoppingDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShoppingDrawer({ open, setOpen}: ShoppingDrawerProps) {
  
  const { cartItems } = useShoppingCart();
  const toggleDrawer = () => (event: { type: string; key: string; }) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
      <div className="drawer">
        <h5>Your ShoppingCart</h5>
       {/* { cartItems.map(item => (
       <CartItem key={item.id} {...item} />))} */}
        <NavLink to="/checkout">
          <Button variant="outlined" onClick={handleButtonClick}>
            To Checkout
          </Button>
        </NavLink>
        <div className="body-drawer">

          <Stack>
            {cartItems.map(item => (
              <CartItem key= {item.id} {...item} />
              ))}
          </Stack>

        </div> 
      </div>
    </Drawer>
  );
}

export default ShoppingDrawer;

      