import { CartItem } from "../context/CartContext";
import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
interface Address {
  steeet: string;
  zipcode: string;
  city: string;
  country: string;
}

interface Order {
  orderItems: CartItem[];
  deliveryAddress: Address;
  shippingMethod: string;
}

interface IOrderContext {
  order: Order | null;
  setOrder: (order: Order) => void;
}

export const OrderContext = createContext<IOrderContext>({
  order: null,
  setOrder: () => {},
});

export const useOrder = () => useContext(OrderContext);

export const OrderProvider: React.FC = ({ children }: PropsWithChildren) => {
  const [order, setOrder] = useState<Order | null>(null);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
