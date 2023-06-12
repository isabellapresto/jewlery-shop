import { useEffect, useContext, useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { UserContextType } from "../CurrentUserContext";
import { Container } from "@mui/material";

import CircularIndeterminate from "../Loader/Loader";

function OrderConfirmation() {
  const { order } = useOrder();
  const { loggedInUser } = useContext(UserContextType);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    console.log("OrderConfirmation component rendered", order);
  }, [order]);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        padding: "1rem",
        marginTop: "1rem",
      }}
    >
      <h2>Order Confirmation</h2>
      <p>
        Order details: {loggedInUser?.email}, {loggedInUser?.firstName},{" "}
        {loggedInUser?.lastName}{" "}
      </p>
      <p>Order Number: {order.orderNumber}</p>

      <p>
        Delivery Address: {order.deliveryAddress.street}
        {order.deliveryAddress.zipcode} {order.deliveryAddress.city},
        {order.deliveryAddress.country}
      </p>

      <h3>Order Items:</h3>
      <ul>
        {order.orderItems.map((item) => (
          <li key={item.product}>
            Product: {item.product}, Quantity: {item.quantity}, Price:{" "}
            {item.price}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default OrderConfirmation;
