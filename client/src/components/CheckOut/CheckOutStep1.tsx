import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { UserContextType } from "../CurrentUserContext"; //UserType,
import { useOrder } from "../../context/OrderContext";
import Alert from '@mui/material/Alert';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CartItem from "../CartItem/CartItem";
import { useShoppingCart } from "../../context/CartContext";
import "./CheckOut.css";

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const { loggedInUser } = useContext(UserContextType);
  const [name, setName] = useState(loggedInUser?.firstName + " " + loggedInUser?.lastName);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState(loggedInUser?.email);
  const [postcode, setPostCode] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");
  const { cartItems } = useShoppingCart();

  const [alert, setAlert] = useState(false);

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

  function handleAlert() {
    setAlert(!alert);
  }


  const handleNext = () => {
    if (name && address && email && postcode && town && country) {
      onNext();
    } else {

      handleAlert()
    }
  };

  return (
    <div style={{ padding: "50px" }}>
   
      <Box 
      sx={{ 
        width: ["95%", "80%", "60%"], 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: "center", 
        margin: "auto", 
        marginTop: 5, 
        boxShadow: 3, 
        borderRadius: 2, 
        px: 4, py: 6 }}>
      
      <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
        Cart
      </Typography>
      
      <p
        style={{
          paddingBottom: "1rem",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Please check your cart details
      </p>
        
        <Stack spacing={2}>
          {cartItems.map((item) => (
            <Stack
              direction={{ sm: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ sm: 'flexStart', md: 'center'}}
              justifyContent="space-between"
            >
              <CartItem key={item.id} {...item} />
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box 
      sx={{ 
        width: ["95%", "80%", "60%"], 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: "center", 
        margin: "auto", 
        marginTop: 5, 
        boxShadow: 3, 
        borderRadius: 2, 
        px: 4, py: 6 }}>

      <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
        Billing Details
      </Typography>

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

      { alert ? (
          <Alert onClose={handleNext} severity="error" style={{marginBottom: '2rem'}}>
            Please fill in all mandatory fields
          </Alert>
            ) : (
          <Alert severity="error" style={{display: 'none'}}></Alert> 
        )}

      <Button
        variant="outlined"
        onClick={handleNext}
        fullWidth
        style={{marginTop: '1rem'}}
      >
        Continue to Shipping
      </Button>
    </Box>
    </div>
  )
};

export default Step1;
