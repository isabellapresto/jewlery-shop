import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import ShoppingDrawer from "../Drawer/Drawer";
import { Badge } from "@mui/material";

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
      <div onClick={open ? handleClose : handleOpen}>
        <Badge color="secondary" badgeContent={0} showZero>
          <ShoppingCart />
        </Badge>
      </div>
      <ShoppingDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
