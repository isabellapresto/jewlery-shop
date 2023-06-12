import React, { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";

import { useOrder } from "../../context/OrderContext";

interface Step2Props {
  onBack: () => void;
  onNext: () => void;
}

export interface ShippingMethod {
  _id: string;
  company: string;
  deliveryTimeInHours: number;
  price: number;
}

const Step2: React.FC<Step2Props> = ({ onBack, onNext }) => {
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingMethodText, setShippingMethodText] = useState("");

  const [alert, setAlert] = useState(false);

  const { order, setOrder } = useOrder();
  useEffect(() => {
    const getShippingMethods = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/shippingMethod"
        );
        const data = await response.json();
        setShippingMethods(data);
      } catch (err) {
        console.log(err);
      }
    };

    getShippingMethods();
  }, []);

  function handleAlert() {
    setAlert(!alert);
  }

  const handleShippingMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedShippingMethodId = e.target.value;

    let text = "";
    const selectedMethod = shippingMethods.find(
      (method) => method._id === selectedShippingMethodId
    );
    if (selectedMethod) {
      const deliveryDate = new Date();
      deliveryDate.setHours(
        deliveryDate.getHours() + selectedMethod.deliveryTimeInHours
      );
      text = `Your order will be delivered: ${deliveryDate.toLocaleDateString()}`;
    }
    setShippingMethod(selectedShippingMethodId);

    setShippingMethodText(text);
  };

  const handleNext = () => {
    if (shippingMethod) {
      const updatedOrder = { ...order, shippingMethod: shippingMethod };
      console.log("Updated Order:", updatedOrder);
      setOrder(updatedOrder);
      console.log("Shipping method:", shippingMethod);
      onNext();
    } else {
      handleAlert()

    }
  };

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px", maxWidth: '50%', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: "center", paddingBottom: "2rem" }}>Shipping methods</h2>
      <FormControl component="fieldset">
        <RadioGroup
          value={shippingMethod}
          onChange={handleShippingMethodChange}
        >
          {shippingMethods.map((method) => (
            <FormControlLabel
              key={method._id}
              value={method._id}
              control={<Radio />}
              label={`${method.company}, ${method.deliveryTimeInHours} hours, ${method.price} kr`}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <p>{shippingMethodText}</p>

      <div style={{ marginTop: "20px" }}>

      { alert ? (
          <Alert onClose={handleNext} severity="error" style={{marginBottom: '2rem'}}>
            Please select a shipping method
          </Alert>
            ) : (
          <Alert severity="error" style={{display: 'none'}}></Alert> 
        )}
        <Button
          variant="outlined"
          style={{marginRight: "10px"}}
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step2;
