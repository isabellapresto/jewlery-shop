import React, { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Typography
} from "@mui/material";

import { useOrder } from "../../context/OrderContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";

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
  const { cartItems } = useShoppingCart();
  const {products } = useProductContext();
  const [alert, setAlert] = useState(false);
  const [shippingMethodPrice, setShippingMethodPrice] = useState(0)
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
    let price = 0;
    const selectedMethod = shippingMethods.find(
      (method) => method._id === selectedShippingMethodId
    );
    if (selectedMethod) {
      const deliveryDate = new Date();
      deliveryDate.setHours(
        deliveryDate.getHours() + selectedMethod.deliveryTimeInHours
      );
      text = `Your order will be delivered: ${deliveryDate.toLocaleDateString()}`;
      price = selectedMethod.price;
    }
    setShippingMethod(selectedShippingMethodId);

    setShippingMethodText(text);
    setShippingMethodPrice(price);
  };

  const handleNext = () => {
    if (shippingMethod) {
      const updatedOrder = { ...order, shippingMethod: shippingMethod };

      setOrder(updatedOrder);

      onNext();
    } else {
      handleAlert()

    }
  };

  return (
    <Box 
    sx={{ 
      width: ["95%", "80%", "60%"], 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      alignItems: "center", 
      margin: "auto", 
      marginTop: "50px",
      marginBottom: "50px",  
      boxShadow: 3, 
      borderRadius: 2, 
      px: 4, py: 6 }}>

      <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500}>
        Shipping methods
      </Typography>
    
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
      <div className="total-price" style={{paddingTop:20}}>
  
  {`Total: ${formatCurrency(

    cartItems.reduce((total, cartItem) => {
      const item = products.find(i => i._id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity + shippingMethodPrice

    }, 0)
  )}`}
  </div>
  </Box>
  );
};

export default Step2;
