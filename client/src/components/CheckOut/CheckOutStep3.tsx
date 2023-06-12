import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
} from "@mui/material";
import { useShoppingCart } from "../../context/CartContext"; // hämtar context

import { Order, useOrder } from "../../context/OrderContext";

interface Step3Props {
  onBack: () => void;
  onComplete: () => void;
}

const Step3: React.FC<Step3Props> = ({ onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [email, setEmail] = useState("");

  const { setOrder, order } = useOrder();

  const { emptyCart } = useShoppingCart(); // Hämtar emptyCart fån context

  const handleComplete = () => {
    if (paymentMethod === "creditCard") {
      if (cardNumber && expiryDate && cvcCode) {
        onComplete();
      } else {
        alert("Please fill in all card details.");
      }
    } else if (paymentMethod === "paypal") {
      if (email) {
        onComplete();
      } else {
        alert("Please enter your email address.");
      }
    } else {
      onComplete();
    }
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const cartIntoOrder = () => {
    const cart = localStorage.getItem("shopping-cart");
    const parsedCart = JSON.parse(cart || "[]");

    const orderFinish = { ...order, orderItems: parsedCart };
    console.log("WrappingUp order", orderFinish);
    setOrder(orderFinish);
    sendOrderToDataBase(orderFinish);
  };

  //----------------------------OrderToDataBase-------------------------------------//

  const sendOrderToDataBase = async (orderData: Order) => {
    const { orderItems, deliveryAddress, shippingMethod } = orderData;
    const orderItems2 = orderItems.map((item) => ({
      product: item.id,
      quantity: item.quantity,
    }));
    console.log(orderItems2);
    // console.log("ORDER BEFORE SENDING TO DATABASE", orderData);
    try {
      const orderResponse = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderItems: orderItems2,
          deliveryAddress,
          shippingMethod,
        }),
      });

      if (orderResponse.ok) {
        const order = await orderResponse.json();
        console.log("Order successfully sent to the database:", order);
      }
    } catch (error) {
      console.error("Error sending order to the database:", error);
    }
  };
  //----------------------------OrderToDataBase-------------------------------------//

  return (
    <div style={{ padding: "50px", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "50%", margin: "auto"}}>
      <h2 style={{ textAlign: "center", paddingBottom: "1rem" }}>Payment methods</h2>
      <FormControl component="fieldset">
        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
          <FormControlLabel value="card" control={<Radio />} label="Card" />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        </RadioGroup>
      </FormControl>

      {paymentMethod === "card" && (
        <div style={{paddingBottom: "50px"}}>
          <TextField
            required
            id="standard-required"
            label="Card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            required
            id="standard-required"
            label="Expiry date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TextField
            required
            id="standard-required"
            label="CVC"
            value={cvcCode}
            onChange={(e) => setCvcCode(e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div>
          <TextField
            required
            id="standard-required"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
        </div>
      )}

      <div style={{paddingTop: "1rem"}}>
        <Button onClick={onBack} style={{ marginRight: '10px' }}  variant="outlined">
          Back to shipping
        </Button>

        <Button
        variant="outlined"
        onClick={() => {
          cartIntoOrder();
          handleComplete();
          emptyCart();
        }}>
          Complete purchase
        </Button>
      </div>

    </div>
  );
};

export default Step3;
