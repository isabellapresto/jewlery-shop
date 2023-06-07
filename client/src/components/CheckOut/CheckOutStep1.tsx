import React, { useState, useContext, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { UserContextType } from "../CurrentUserContext"; //UserType,
import { useOrder } from "../../context/OrderContext";

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
    // spara
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
      <h2 style={{ padding: "50px", textAlign: "center" }}>Billing Details</h2>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
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
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="inherit"
        onClick={handleNext}
        style={{ margin: "0 auto", backgroundColor: "black", color: "white" }}
      >
        Continue to Shipping
      </Button>
    </div>
  ) : null;
};

export default Step1;
