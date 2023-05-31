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

    // Uppdatera texten baserat på vald shipping-metod - här ska en funktion göras som räknar ut leveransdatum?
    let text = '';
    if (selectedShippingMethod === 'standard') {
      text = '24h, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    } else if (selectedShippingMethod === 'express') {
      text = '48h Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
    } else if (selectedShippingMethod === 'shipping3') {
      text = '4-5 days Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor';
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
          <FormControlLabel value="standard" control={<Radio />} label="Shipping 1" />
          <FormControlLabel value="express" control={<Radio />} label="Shipping 2" />
          <FormControlLabel value="shipping3" control={<Radio />} label="Shipping 3" />
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


