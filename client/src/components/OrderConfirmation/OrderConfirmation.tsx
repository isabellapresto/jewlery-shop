

// import { useEffect, useContext, useState } from "react";
// import { useOrder } from "../../context/OrderContext";
// import { UserContextType } from "../../context/CurrentUserContext";
// import { Container, Box } from "@mui/material";


// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


// import CircularIndeterminate from "../Loader/Loader";


// function OrderConfirmation() {
// const { order } = useOrder();
// const { loggedInUser } = useContext(UserContextType);
// const [isLoading, setIsLoading] = useState(true);


// useEffect(() => {
// setTimeout(() => {
// setIsLoading(false);
// }, 2000);


// console.log("OrderConfirmation component rendered", order);
// }, [order]);


// if (isLoading) {
// return <CircularIndeterminate />;
// }


// return (
// <Container>
// <Container
// style={{
// textAlign: "center",
// marginTop: "2rem",
// border: "3px solid #E9D5EF",
// minWidth: "50%",
// padding: "3rem",
// borderRadius: "1rem",
// }}
// >
// <h2>Thanks for your order</h2>
// <br />
// <FavoriteBorderIcon fontSize="large" style={{ color: "#E9D5EF" }} />
// </Container>
// <Container
// maxWidth="sm"
// sx={{
// display: "flex",
// flexDirection: "column",
// alignItems: "center",


// padding: "1rem",
// marginTop: "2rem",
// marginBottom: "2rem",
// }}
// >
// <br />
// <h2>Order Confirmation </h2>
// <br />
// <Container>
// <p>
// <h3>Order Details</h3>
// <br />
// Email: {loggedInUser?.email}
// <br /> Fullname: {loggedInUser?.firstName} {loggedInUser?.lastName}{" "}
// <br /> Ordernumber: {order.orderNumber}
// </p>
// </Container>
// <br />
// <Container>
// <p>
// <h3>Delivery Address</h3>
// <br></br>
// Street: {order.deliveryAddress.street} <br />
// City: {order.deliveryAddress.city} <br />
// Zipcode: {order.deliveryAddress.zipcode} <br />
// Country: {order.deliveryAddress.country}
// </p>
// </Container>
// <br />
// <Container
// style={{ borderTop: "3px solid #E9D5EF", marginBottom: "3rem" }}
// >
// <br />
// <h3 style={{ textAlign: "center" }}>Order Items</h3>
// <br />


// <ul style={{ listStyleType: "none" }}>
// {order.orderItems.map((item) => (
// <li key={item.product}>
// <Box
// sx={{
// display: "flex",
// alignItems: "center",
// justifyContent: "center",
// borderBottom: "2px solid #E9D5EF",
// padding: "1rem",
// margin: "0.5rem",
// marginLeft: "0",
// }}
// >
// Product: {item.product}, Quantity: {item.quantity}, Price:{" "}
// {item.price}
// </Box>
// </li>
// ))}
// </ul>
// </Container>
// </Container>
// </Container>
// );
// }


// export default OrderConfirmation;




import { useEffect, useContext, useState } from "react";
import { useOrder } from "../../context/OrderContext";
import { UserContextType } from "../../context/CurrentUserContext";
import { Container, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircularIndeterminate from "../Loader/Loader";


function OrderConfirmation() {
const { order } = useOrder();
const { loggedInUser } = useContext(UserContextType);
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
setTimeout(() => {
setIsLoading(false);
}, 2000);


console.log("OrderConfirmation component rendered", order);
}, [order]);


if (isLoading) {
return <CircularIndeterminate />;
}


return (
<Container>
<Container
style={{
textAlign: "center",
marginTop: "2rem",
border: "3px solid #E9D5EF",
minWidth: "50%",
padding: "3rem",
borderRadius: "1rem",
}}
>
<h2>Thanks for your order</h2>
<br />
<FavoriteBorderIcon fontSize="large" style={{ color: "#E9D5EF" }} />
</Container>
<Container
maxWidth="sm"
sx={{
display: "flex",
flexDirection: "column",
alignItems: "center",
padding: "1rem",
marginTop: "2rem",
marginBottom: "2rem",
}}
>
<br />
<Typography variant="h2">Order Confirmation</Typography>
<br />
<Container>
<Typography variant="h3">Order Details</Typography>
<br />
<p>
Email: {loggedInUser?.email}
<br />
Fullname: {loggedInUser?.firstName} {loggedInUser?.lastName}
<br />
Ordernumber: {order.orderNumber}
</p>
</Container>
<br />
<Container>
<Typography variant="h3">Delivery Address</Typography>
<br />
<p>
Street: {order.deliveryAddress.street} <br />
City: {order.deliveryAddress.city} <br />
Zipcode: {order.deliveryAddress.zipcode} <br />
Country: {order.deliveryAddress.country}
</p>
</Container>
<br />
<Container
style={{ borderTop: "3px solid #E9D5EF", marginBottom: "3rem" }}
>
<br />
<Typography variant="h3" style={{ textAlign: "center" }}>
Order Items
</Typography>
<br />
<ul style={{ listStyleType: "none" }}>
{order.orderItems.map((item) => (
<li key={item.product}>
<Box
sx={{
display: "flex",
alignItems: "center",
justifyContent: "center",
borderBottom: "2px solid #E9D5EF",
padding: "1rem",
margin: "0.5rem",
marginLeft: "0",
}}
>
Product: {item.product}, Quantity: {item.quantity}, Price:{" "}
{item.price}
</Box>
</li>
))}
</ul>
</Container>
</Container>
</Container>
);
}


export default OrderConfirmation;