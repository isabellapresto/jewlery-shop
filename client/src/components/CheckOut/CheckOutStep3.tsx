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

import { useOrder } from "../../context/OrderContext";

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
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ padding: "50px", textAlign: "center" }}>Payment methods</h2>
      <FormControl component="fieldset">
        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
          <FormControlLabel value="card" control={<Radio />} label="Card" />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        </RadioGroup>
      </FormControl>

      {paymentMethod === "card" && (
        <div>
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
      <div style={{ marginTop: "20px" }}></div>
      <Button
        onClick={onBack}
        style={{
          backgroundColor: "black",
          color: "white",
          marginRight: "10px",
        }}
      >
        Back to shipping
      </Button>
      <Button
        variant="contained"
        color="inherit"
        style={{ backgroundColor: "black", color: "white" }}
        onClick={() => {
          //

          cartIntoOrder();
          handleComplete();
          emptyCart();
        }}
      >
        Complete purchase
      </Button>
    </div>
  );
};

export default Step3;
