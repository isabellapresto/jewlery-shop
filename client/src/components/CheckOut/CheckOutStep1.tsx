import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { UserType, UserContextType } from "../CurrentUserContext"


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
      <h2 style={{ padding: '50px', textAlign: 'center' }}>Billing Details</h2> 
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