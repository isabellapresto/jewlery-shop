import { useShoppingCart } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";
import "../CartItem/CartItem.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: string;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const { products } = useProductContext();

  const item = products.find((i) => i._id === id);
  if (item === null) return null;

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box>
          <img
            src={item?.image}
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        </Box>

        <Box>
          <span className="cartitem-title">{item?.title} </span>
          <br />

          <span className="cartitem-price ">
            {item && formatCurrency(item?.price * quantity)}
          </span>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={0.5}
        justifyContent="center"
        alignItems="center"
      >
      <Button
        className="cartitem-qty-btn"
        onClick={() => item && increaseCartQuantity(item?._id)}
      >
      <AddIcon />
      </Button>

      <Box className="cartitem-qty-btn">
        <div className="qty-div">x {quantity}</div>
      </Box>

      {quantity > 1 ? (
        <Button
          className="cartitem-qty-btn"
          onClick={() => item && decreaseCartQuantity(item?._id)}
        >
        <RemoveIcon />
        </Button>
        ) : (
        <Button className="cartitem-qty-btn">
          <RemoveIcon />
        </Button>
        )}

        <Button
          className="cartitem-qty-btn"
          onClick={() => item && removeFromCart(item?._id)}
        >
          <DeleteForeverOutlinedIcon />
        </Button>
      </Stack>
    </>
  );
}
