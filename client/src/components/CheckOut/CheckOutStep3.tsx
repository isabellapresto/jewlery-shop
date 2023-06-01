import React, { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Button, TextField } from '@mui/material';

interface Step3Props {
  onBack: () => void;
  onComplete: () => void;
}

const Step3: React.FC<Step3Props> = ({ onBack, onComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvcCode, setCvcCode] = useState('');
  const [email, setEmail] = useState('');

  const handleComplete = () => {
    // spara 
    if (paymentMethod === 'creditCard') {
      // Validera kortuppgifter och spara data
      if (cardNumber && expiryDate && cvcCode) {
        // Spara, gå vidare
        onComplete();
      } else {
        // alert, fyll i 
        alert('Please fill in all card details.');
      }
    } else if (paymentMethod === 'paypal') {
      // Validera e-postadress och spara data
      if (email) {
        // Spara, gå vidare
        onComplete();
      } else {
        // alert, fyll i 
        alert('Please enter your email address.');
      }
    } else {
      // Spara bet-metod
      onComplete();
    }
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div style={{ padding: '50px' }}>
    <h2 style={{ padding: '50px', textAlign: 'center' }}>Payment methods</h2>
      <FormControl component="fieldset">
        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
          <FormControlLabel value="card" control={<Radio />} label="Card" />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        </RadioGroup>
      </FormControl>

      {paymentMethod === 'card' && (
        <div>
          <TextField
            label="Card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            fullWidth
            margin='normal'
          />
          <TextField
            label="Expiry date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            fullWidth
            margin='normal'
          />
          <TextField
            label="CVC"
            value={cvcCode}
            onChange={(e) => setCvcCode(e.target.value)}
            fullWidth
            margin='normal'
          />
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div>
          <TextField
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin='normal'
          />
        </div>
      )}
 <div style={{ marginTop: '20px' }}></div>
      <Button onClick={onBack}
      style={{ backgroundColor: 'black', color: 'white', marginRight: '10px' }}>Back to shipping</Button>
      <Button     variant="contained"
          color="inherit"
          style={{ backgroundColor: 'black', color: 'white' }} onClick={handleComplete}>
        Complete purchase
      </Button>

    </div>
  );
};

export default Step3;

