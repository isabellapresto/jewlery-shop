import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import './Drawer.css'
import { useShoppingCart } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";
import CartItem from "../CartItem/CartItem";
import { formatCurrency } from "../../utilities/formatCurrency";
import CloseIcon from '@mui/icons-material/Close';
import {  UserContextType } from '../../context/CurrentUserContext';
import { useContext } from 'react'

interface ShoppingDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ShoppingDrawer({ open, setOpen}: ShoppingDrawerProps) {
  
  const { cartItems } = useShoppingCart();
  const {products } = useProductContext();
  const {loggedInUser} = useContext(UserContextType);

  const toggleDrawer = () => (event: { type: string; key: string; }) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(false);
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
      <div className="drawer">

        <CloseIcon className="close-drawer" onClick={handleButtonClick}></CloseIcon>

        {isCartEmpty ? " " : <h4>Your ShoppingCart</h4>}

        <div className="body-drawer">
          <Stack>
            {cartItems.map(item => (
              <CartItem key= {item.id} {...item} />
              ))}
          </Stack>
        </div> 

        <div className="total-price">
  
          {isCartEmpty ? "Your Shopping Cart is empty" : `Total ${formatCurrency(

            cartItems.reduce((total, cartItem) => {
              const item = products.find(i => i._id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity

            }, 0)
          )}`}

        </div>

        {!isCartEmpty && (
        <Link to="/checkout">
          <Button variant="outlined" onClick={handleButtonClick}>
            To Checkout
          </Button>
        </Link>
        )}

        {!loggedInUser && (
          <div>
            <p style={{color: 'red'}}>You need to log in to be able to go to CheckOut</p>
          </div>
        )}

      </div>
    </Drawer>
  );
}
   