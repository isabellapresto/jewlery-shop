import { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

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

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel style={{ marginTop: '50px' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? null : renderStepContent(activeStep)}
    </div>
  );
}
