import Drawer from "@mui/material/Drawer";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import './Drawer.css'
import ProductCard from "../ProductCard/ProductCard";
import { useProductContext } from "../../context/ProductContext";

interface ShoppingDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShoppingDrawer({ open, setOpen }: ShoppingDrawerProps) {
  const toggleDrawer = () => (event: { type: string; key: string; }) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setOpen(false);
  };

  const handleButtonClick = () => {
    setOpen(false);
  };

  const {products} = useProductContext();

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
      <div className="drawer">
        <h5>Din kundvagn</h5>
        {products.map((product) => (
            <ProductCard product={product} />
        ))}
        <NavLink to="/checkout">
          <Button variant="outlined" onClick={handleButtonClick}>
            Till Kassan
          </Button>
        </NavLink>
      </div>
    </Drawer>
  );
}

export default ShoppingDrawer;

      