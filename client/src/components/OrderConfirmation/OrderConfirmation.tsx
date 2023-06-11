import { useEffect } from "react";
import { useOrder } from "../../context/OrderContext";
import { useContext } from "react";
import { UserContextType } from "../CurrentUserContext";

function OrderConfirmation() {
  const { order } = useOrder();
  const { loggedInUser } = useContext(UserContextType);

  useEffect(() => {
    console.log("OrderConfirmation component rendered", order);
  }, [order]);

  return (
    <div>
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
    </div>
  );
}

export default OrderConfirmation;
