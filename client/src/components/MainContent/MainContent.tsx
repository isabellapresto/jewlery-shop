import { Routes, Route } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductDetails/ProductDetails";
import Login from "../Login/Login";
import CheckOut from "../CheckOut/CheckOut";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

function MainContent() {
  return (
    
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/shop' element= {<ProductList />} />
        <Route path='/about' element= {<About />} /> 
        <Route path='/contact' element= {<Contact />} />
        <Route path='/checkout' element= {<CheckOut />} /> 
        <Route path='/:id' element= {<ProductDetails />}  />
        <Route path='/login' element= {<Login />} />
      </Routes>
  
  );
}
export default MainContent;
