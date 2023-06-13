import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { CartItem } from "../../context/CartContext";
import { Address } from "../../context/OrderContext";
import Button from '@mui/material/Button';

export interface ShippedOrder {
    orderItems: CartItem[];
    deliveryAddress: Address;
    shippingMethod: string | number;
    orderNumber?: number;
    shipped: boolean;
    
  }
  

function AdminOrders() {

    const [ orders, setOrders ] = useState<ShippedOrder[]>([]);
    const [isShipped, setIsShipped] = useState<false | boolean>();

    useEffect(() => {
        const getShippingMethods = async () => {
          try {
            const response = await fetch(
              "api/orders"
            );
            const data = await response.json();
            setOrders(data);
            // setIsShipped(true)
            console.log(data);
            // console.log(shipping);
          } catch (err) {
            console.log(err);
          }
        };
        getShippingMethods();
      }, []);

      const { id } = useParams();
      const [newOrder, setNewOrder] = useState("")

    //   useEffect (() => {
        const markAsShipped = async (_id: string) => {
            
                try{
                    const response = await fetch(`api/orders/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                        shipped: true
                        })
                    });
                    const data = await response.json();
                    
                    if (response.status === 200) {
                        
                        setIsShipped(true)
                        if(_id === id) {
                            setNewOrder(data)
                            console.log("marked as shipped");
                        }
                        
                        
                        // setOrders(data) 
                        // console.log("order marked as shipped");
                      } else {
                        console.log("sorry, the order is not marked as shipped");
                      }
            } catch (err) {
      console.log(err);
    }

}
        // markAsShipped()
    //   },[id]);
        

      const handleSubmit = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        markAsShipped(newOrder);
        console.log(isShipped);
        
        
        
      }
   

  return (
    
        <div>
          <h2>Admin Orders</h2>
          {orders.map((order) => (
            <div key={order.orderNumber}>
                <p style={{paddingTop:20}}>Ordernumber: {order.orderNumber}</p>
                <p>{order.customer.firstName + " " + order.customer.lastName}</p>
                <p>{order.deliveryAddress.street + " " + order.deliveryAddress.zipcode + " " + order.deliveryAddress.city  + " " + order.deliveryAddress.country}</p>
                <Button type="submit" onClick={handleSubmit}>mark as shipped</Button>
              
             </div>
           
          ))}
        </div>
      );
    }
    

export default AdminOrders

