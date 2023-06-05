import { useEffect, useState } from "react";

export default function Shipping() {
  interface ShippingMethod {
    company: string;
    deliveryTimeInHours: number;
    price: number;
    id: string;
  }

  const [shippings, setShippings] = useState<ShippingMethod[]>([]);

  useEffect(() => {
    const getShippingMethods = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/shippingMethod"
        );
        const data = await response.json();
        setShippings(data);
        // console.log(shipping);
      } catch (err) {
        console.log(err);
      }
    };
    getShippingMethods();
  }, []);

  return (
    <div>
      <h2>Shipping Information</h2>
      {shippings.map((shipping) => (
        <div key={shipping.id}>
          <p>Company: {shipping.company}</p>
          <p>Price: ${shipping.price}</p>
          <p>Delivery Time: {shipping.deliveryTimeInHours} hours</p>
        </div>
      ))}
    </div>
  );
}
