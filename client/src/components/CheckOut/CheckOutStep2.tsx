import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";

interface Step2Props {
  onBack: () => void;
  onNext: () => void;
}

interface ShippingMethod {
  company: string;
  deliveryTimeInHours: number;
  price: number;
}

const Step2: React.FC<Step2Props> = ({ onBack, onNext }) => {
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const [shippingMethodText, setShippingMethodText] = useState("");

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

  const handleShippingMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedShippingMethod = e.target.value;
    setShippingMethod(selectedShippingMethod);

    let text = "";
    const selectedMethod = shippingMethods.find(
      (method) => method.company === selectedShippingMethod
    );
    if (selectedMethod) {
      const deliveryDate = new Date();
      deliveryDate.setHours(
        deliveryDate.getHours() + selectedMethod.deliveryTimeInHours
      );
      text = `Your order will be delivered: ${deliveryDate.toLocaleDateString()}`;
    }

    setShippingMethodText(text);
  };

  const handleNext = () => {
    if (shippingMethod) {
      onNext();
    } else {
      alert("Please select a shipping method.");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ padding: "50px", textAlign: "center" }}>Shipping methods</h2>
      <FormControl component="fieldset">
        <RadioGroup
          value={shippingMethod}
          onChange={handleShippingMethodChange}
        >
          {shippingMethods.map((method) => (
            <FormControlLabel
              key={method.company}
              value={method.company}
              control={<Radio />}
              label={`${method.company}, ${method.deliveryTimeInHours} hours, ${method.price} kr`}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <p>{shippingMethodText}</p>

      <div style={{ marginTop: "20px" }}>
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
