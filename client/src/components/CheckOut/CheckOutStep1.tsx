import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { UserContextType } from "../CurrentUserContext"

import Stack from '@mui/material/Stack';
import CartItem from '../CartItem/CartItem';
import { useShoppingCart } from "../../context/CartContext";
import './CheckOut.css'


interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const {loggedInUser} = useContext(UserContextType);
  const [name, setName] = useState(loggedInUser?.firstName + ' ' + loggedInUser?.lastName );
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState(loggedInUser?.email);
  const [postcode, setPostCode] = useState('');
  const [town, setTown] = useState('');
  const [country, setCountry] = useState(''); 
  const { cartItems } = useShoppingCart();

  const handleNext = () => {
    // spara
    if (name && address && email && postcode && town && country) {
      onNext();
    } else {
      // alert, felmedd
      alert('Please fill in all mandatory fields.');
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      {/* mitten */}
      
      {/* mitten */}
      <h2 style={{ padding: '50px', paddingBottom: '0.5rem', textAlign: 'center' }}>Cart</h2> 
      <p style={{ paddingBottom: '1rem', textAlign: 'center', fontStyle: 'italic' }}>Please check your cart details</p>
      <div className= "cartContainer">
        <Stack spacing={2}>
            {cartItems.map(item => (
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
              <CartItem key= {item.id} {...item} />
              </Stack>
              ))}
          </Stack>
        </div>
      <h2 style={{ padding: '50px', paddingBottom: '0.5rem', textAlign: 'center' }}>Billing Details</h2>
      <p style={{ paddingBottom: '1rem', textAlign: 'center', fontStyle: 'italic' }}>Please fill in your billing details</p> 
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
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        margin="normal"
      />

<TextField
        label="Post code"
        value={postcode}
        onChange={(e) => setPostCode(e.target.value)}
        fullWidth
        margin="normal"
      />

<TextField
        label="Town / City"
        value={town}
        onChange={(e) => setTown(e.target.value)}
        fullWidth
        margin="normal"
      />

<TextField
        label="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
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
        style={{ margin: '0 auto', backgroundColor: 'black', color: 'white' }} 
      >
        Continue to Shipping
      </Button>
    </div>
  );
};

export default Step1;
