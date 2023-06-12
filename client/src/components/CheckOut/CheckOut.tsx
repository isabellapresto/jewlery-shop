import  { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography } from '@mui/material';

import CheckOutStep1 from "../CheckOut/CheckOutStep1";
import CheckOutStep2 from '../CheckOut/CheckOutStep2';
import CheckOutStep3 from '../CheckOut/CheckOutStep3';

const steps = ['Check your details', 'Shipping methods', 'Payment methods'];

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <CheckOutStep1 onNext={handleNext} />;
      case 1:
        return <CheckOutStep2 onBack={handleBack} onNext={handleNext} />;
      case 2:
        return <CheckOutStep3 onBack={handleBack} onComplete={handleNext} />;
      default:
        return null;
    }
  };
//stepper
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel style={{marginTop: '50px'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <h2 style={{ padding: '50px', textAlign: 'center' }}>Billing Details</h2>  */}
            <Typography variant="h2" style={{ padding: '50px', textAlign: 'center' }}>Thank you for your purchase!</Typography>
            <Button onClick={() => setActiveStep(0)}
              variant="contained"
              color="inherit" 
            
              style={{ margin: '0 auto', backgroundColor: 'black', color: 'white' }} >Back</Button>
          </div>
        ) : (
          <div>
            {renderStepContent(activeStep)}
          </div>
        )}
      </div>
    </div>
  );
}
