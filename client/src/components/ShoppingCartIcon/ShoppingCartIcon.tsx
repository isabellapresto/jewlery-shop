import { useState } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import ShoppingDrawer from "../Drawer/Drawer";
import { useShoppingCart } from "../../context/CartContext";
import "./ShoppingCartIcon.css";

export default function MyShoppingCart() {
  const [open, setOpen] = useState(false);
  const { cartQuantity } = useShoppingCart();

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
          <ShoppingCart className="shopping-cart-icon" />
        </Badge>
      </div>
      <ShoppingDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
