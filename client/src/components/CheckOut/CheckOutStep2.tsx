import React, { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Button } from '@mui/material';

interface Step2Props {
  onBack: () => void;
  onNext: () => void;
}

const Step2: React.FC<Step2Props> = ({ onBack, onNext }) => {
  const [shippingMethod, setShippingMethod] = useState('');
  const [shippingMethodText, setShippingMethodText] = useState('');

  const handleShippingMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedShippingMethod = e.target.value;
    setShippingMethod(selectedShippingMethod);

    let text = '';
    if (selectedShippingMethod === 'standard') {
      const deliveryDate = new Date();
      deliveryDate.setHours(deliveryDate.getHours() + 24);
      text = `Your order will be delivered: ${deliveryDate.toLocaleDateString()}, ${deliveryDate.toLocaleTimeString()}`;
    
    } else if (selectedShippingMethod === 'express') {
      const deliveryDate = new Date();
      deliveryDate.setHours(deliveryDate.getHours() + 48);
      text = `Your order will be delivered: ${deliveryDate.toLocaleDateString()}, ${deliveryDate.toLocaleTimeString()}`;
   
    } else if (selectedShippingMethod === 'shipping3') {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 4);
      text = `Your order will be delivered: ${deliveryDate.toLocaleDateString()}, ${deliveryDate.toLocaleTimeString()}`;
    }

    setShippingMethodText(text);
  };

  const handleNext = () => {
    if (shippingMethod) {
      onNext();
    } else {
      alert('Please select a shipping method.');
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <h2 style={{ padding: '50px', textAlign: 'center' }}>Shipping methods</h2>
      <FormControl component="fieldset">
        <RadioGroup value={shippingMethod} onChange={handleShippingMethodChange}>
          {/* Vilka shipping methods och pris? */}
          <FormControlLabel value="standard" control={<Radio />} label="Shipping 1, 24h" />
          <FormControlLabel value="express" control={<Radio />} label="Shipping 2, 48h" />
          <FormControlLabel value="shipping3" control={<Radio />} label="Shipping 3, 4 days" />
        </RadioGroup>
      </FormControl>

      <p>{shippingMethodText}</p>

      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color="inherit"
          style={{ backgroundColor: 'black', color: 'white', marginRight: '10px' }}
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="inherit"
          style={{ backgroundColor: 'black', color: 'white' }}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;



