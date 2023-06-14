import {useEffect, useState} from 'react'
// import { useParams } from "react-router-dom";
import { CartItem } from "../../context/CartContext";
import { Address } from "../../context/OrderContext";
import Button from '@mui/material/Button';
import { User } from '../../context/CurrentUserContext';
import { NavLink } from 'react-router-dom';
import {  Typography,  } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export interface ShippedOrder {
    orderItems: CartItem[];
    deliveryAddress: Address;
    shippingMethod: string | number;
    orderNumber?: number;
    shipped: boolean;
    customer: User;
    _id: string;
    
  }
  

function AdminOrders() {

    const [ orders, setOrders ] = useState<ShippedOrder[]>([]);
    
    const getShippingMethods = async () => {
        try {
          const response = await fetch(
            "api/orders"
          );
          const data = await response.json();
          setOrders(data);
         
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
       
        getShippingMethods();
      }, []);

      const [newOrder, setNewOrder] = useState("")

        const markAsShipped = async (id: string) => {
            
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
                       
                            setNewOrder(data)
                            getShippingMethods();
                          
                      } else {
                        console.log("sorry, the order is not marked as shipped");
                      }
            } catch (err) {
      console.log(err);
    }

}
      
      const handleSubmit = async (event: React.MouseEvent<HTMLElement>, id:string) => {
        event.preventDefault();
        markAsShipped(id);
       
      }
      
return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
         <div style={{width: '5rem', marginLeft: '30%', paddingTop: '30px', paddingBottom: '30px'}}>
        <NavLink to="/admin" style={{textDecoration: "none" }}>
          <Button variant='outlined'>Back</Button>
        </NavLink>
      </div>
      <div style={{width:"80vw"}}>
      <Typography variant="h4" component="h1" gutterBottom fontFamily={'Cormorant Garamond, serif'} fontWeight={500} style= {{textAlign:"center", paddingBottom:20}}>
          Admin Orders
        </Typography>


      {orders.map((order) => (
        <div key={order.orderNumber} style={{display:"flex", flexDirection:"row", justifyContent:"space-between", borderBottom: "2px solid  lightgrey" }}>
           
  
            <div >
            <div style={{paddingBottom:20, paddingTop:20}}>
            <p style={{ fontWeight:"bold", paddingBottom:7 }}>Ordernumber: {order.orderNumber}</p>
          <p>Name: {order.customer.firstName} {order.customer.lastName}</p>
          <p>Address: {order.deliveryAddress.street} {order.deliveryAddress.zipcode}{" "}
            {order.deliveryAddress.city} {order.deliveryAddress.country}
          </p>
            </div>
            
            </div>
            <div style={{textAlign:"center"}}>
            {order.shipped ? (
                <div style={{color:"green", paddingTop:28}}>
                    <CheckCircleOutlineIcon/>
                    <p>Order is shipped</p>
                </div>
            
          ) : (
            <div>
                <Button type="submit" onClick={(e) => handleSubmit(e, order._id)} style={{paddingTop:40}}>
              Mark as shipped
            </Button>
            </div>
            
          )}
            </div>
          
          
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default AdminOrders

