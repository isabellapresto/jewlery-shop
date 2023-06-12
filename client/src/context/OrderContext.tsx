import { CartItem } from "../context/CartContext";
import { createContext, useContext, useState, PropsWithChildren } from "react";

interface Address {
  street: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface Order {
  orderItems: CartItem[];
  deliveryAddress: Address;
  shippingMethod: string | number;
  orderNumber?: number;
}

interface IOrderContext {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

const defaultOrder = {
  orderItems: [],
  deliveryAddress: {} as Address,
  shippingMethod: "",
};

export const OrderContext = createContext<IOrderContext>({
  order: defaultOrder,
  setOrder: () => {},
});

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }: PropsWithChildren<{}>) => {
  const [order, setOrder] = useState<Order>(defaultOrder);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
