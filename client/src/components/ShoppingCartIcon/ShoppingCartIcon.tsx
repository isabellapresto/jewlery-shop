import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import ShoppingDrawer from '../Drawer/Drawer';
import { useProductContext } from '../../context/ProductContext';
import { Badge } from "@mui/material";

export default function MyShoppingCart() {
  const [open, setOpen] = useState(false);

  const {products} = useProductContext();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={open ? handleClose : handleOpen}>
        <Badge color="secondary" badgeContent={products.length} showZero>
          <ShoppingCart />
        </Badge>
      </div>
      <ShoppingDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
