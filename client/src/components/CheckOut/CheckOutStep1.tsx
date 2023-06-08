import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { UserContextType } from "../CurrentUserContext"; //UserType,
import { useOrder } from "../../context/OrderContext";
import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { UserContextType } from "../CurrentUserContext";

import Stack from "@mui/material/Stack";
import CartItem from "../CartItem/CartItem";
import { useShoppingCart } from "../../context/CartContext";
import "./CheckOut.css";

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const { loggedInUser } = useContext(UserContextType);
  const [name, setName] = useState(
    loggedInUser?.firstName + " " + loggedInUser?.lastName
  );
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState(loggedInUser?.email);
  const [postcode, setPostCode] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");

  const { setOrder, order } = useOrder();

  useEffect(() => {
    console.log(order);
    setAddress(order.deliveryAddress.street);
    setPostCode(order.deliveryAddress.zipcode);
    setTown(order.deliveryAddress.city);
    setCountry(order.deliveryAddress.country);
  }, [order]);

  useEffect(() => {
    console.log(order);
  }, [order]);

  const handleNext = () => {
    if (name && address && email && postcode && town && country) {
      onNext();
    } else {
      // alert, felmedd
      alert("Please fill in all mandatory fields.");
    }
  };

  return loggedInUser ? (
    <div style={{ padding: "50px" }}>
      {/* mitten */}
      <h2
        style={{
          padding: "50px",
          paddingBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        Cart
      </h2>
      <p
        style={{
          paddingBottom: "1rem",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Please check your cart details
      </p>
      <div className="cartContainer">
        <Stack spacing={2}>
          {cartItems.map((item) => (
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <CartItem key={item.id} {...item} />
            </Stack>
          ))}
        </Stack>
      </div>
      <h2
        style={{
          padding: "50px",
          paddingBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        Billing Details
      </h2>
      <p
        style={{
          paddingBottom: "1rem",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Please fill in your billing details
      </p>

      <TextField
        required
        id="standard-required"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Street address"
        value={address}
        onChange={(e) =>
          setOrder({
            ...order,
            deliveryAddress: {
              ...order.deliveryAddress,
              street: e.target.value,
            },
          })
        }
        fullWidth
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Post code"
        value={postcode}
        onChange={(e) =>
          setOrder({
            ...order,
            deliveryAddress: {
              ...order.deliveryAddress,
              zipcode: e.target.value,
            },
          })
        }
        fullWidth
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Town / City"
        value={town}
        onChange={(e) =>
          setOrder({
            ...order,
            deliveryAddress: {
              ...order.deliveryAddress,
              city: e.target.value,
            },
          })
        }
        fullWidth
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Country"
        value={country}
        onChange={(e) =>
          setOrder({
            ...order,
            deliveryAddress: {
              ...order.deliveryAddress,
              country: e.target.value,
            },
          })
        }
        fullWidth
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="outlined"
        // color="inherit"
        onClick={handleNext}
      >
        Continue to Shipping
      </Button>
    </div>
  ) : null;
};

export default Step1;
