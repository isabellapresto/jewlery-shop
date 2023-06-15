import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  TextField,
  Typography,
  Alert
} from "@mui/material";
import { useShoppingCart } from "../../context/CartContext";
import { Order, useOrder } from "../../context/OrderContext";

interface Step3Props {
  onBack: () => void;
  onComplete: () => void;
}

const Step3: React.FC<Step3Props> = ({ onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvcCode, setCvcCode] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const { setOrder, order } = useOrder();
  const { emptyCart } = useShoppingCart();

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleComplete = () => {
    if (paymentMethod === "card") {
      if (cardNumber && expiryDate && cvcCode) {
        cartIntoOrder();
        onComplete();
        emptyCart();
      } else {
        handleShowAlert();
      }
    } else {
      cartIntoOrder();
      onComplete();
      emptyCart();
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

    setOrder(orderFinish);
    sendOrderToDataBase(orderFinish);
  };

  const sendOrderToDataBase = async (orderData: Order) => {
    const { orderItems, deliveryAddress, shippingMethod } = orderData;
    const orderItems2 = orderItems.map((item) => ({
      product: item.id,
      quantity: item.quantity,
    }));

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

        setOrder({ ...order, orderNumber: order.orderNumber });
        navigate("/OrderConfirmation");
      }
    } catch (error) {
      console.error("Error sending order to the database:", error);
    }
  };

  return (
    <Box
      sx={{
        width: ["95%", "80%", "60%"],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        boxShadow: 3,
        borderRadius: 2,
        px: 4, py: 6
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
        Payment methods
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
          <FormControlLabel value="card" control={<Radio />} label="Card" />
        </RadioGroup>
      </FormControl>

      {paymentMethod === "card" && (
        <div style={{ paddingBottom: "50px" }}>
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

      {showAlert && (
        <Alert severity="error" onClose={() => setShowAlert(false)}>
          Please fill in all card details.
        </Alert>
      )}

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, md: 2 }}
        alignItems="center"
        justifyContent="space-between"
        style={{ paddingTop: "1rem", margin: "auto" }}
      >

      <Button onClick={onBack} variant="outlined">
        Back to shipping
      </Button>

      <Button
          variant="outlined"
          onClick={handleComplete}
      >
        Complete purchase
      </Button>
      </Stack>
    </Box>
  );
};

export default Step3;
