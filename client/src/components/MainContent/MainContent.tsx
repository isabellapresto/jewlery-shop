import { Routes, Route } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductDetails/ProductDetails";
import Login from "../Login/Login";
import CheckOut from "../CheckOut/CheckOut";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";
import Shipping from "../Shipping/Shipping";
import AdminProducts from "../AdminProducts/AdminProducts";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import AdminOrders from "../AdminOrders/AdminOrders";

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ProductList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminproducts" element={<AdminProducts />} />
      <Route path="/addnewproduct" element={<AddNewProduct />} />
      <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
      <Route path="/adminorders" element={<AdminOrders />} />
    </Routes>
  );
}
export default MainContent;
