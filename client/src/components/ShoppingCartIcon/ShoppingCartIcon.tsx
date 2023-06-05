import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import ShoppingDrawer from '../Drawer/Drawer';
// import { useProductContext } from '../../context/ProductContext';
import { Badge } from "@mui/material";
import { useShoppingCart } from "../../context/CartContext";

export default function MyShoppingCart() {
  const [open, setOpen] = useState(false);

  const { cartQuantity} = useShoppingCart();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={open ? handleClose : handleOpen}>
        <Badge color="secondary" badgeContent={cartQuantity} showZero>
          <ShoppingCart />
        </Badge>
      </div>
      <ShoppingDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
