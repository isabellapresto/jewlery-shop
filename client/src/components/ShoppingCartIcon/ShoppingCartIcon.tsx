import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import ShoppingDrawer from '../Drawer/Drawer';

export default function MyShoppingCart() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p>0</p>
      <div onClick={open ? handleClose : handleOpen}>
        <ShoppingCart />
      </div>
      <ShoppingDrawer open={open} setOpen={setOpen} />
    </div>
  );
}