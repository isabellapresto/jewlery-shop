import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import ShoppingDrawer from '../Drawer/Drawer';
import { useProductContext } from '../../context/ProductContext';

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
      <p>{products.length}</p>
      <div onClick={open ? handleClose : handleOpen}>
        <ShoppingCart />
      </div>
      <ShoppingDrawer open={open} setOpen={setOpen} />
    </div>
  );
}