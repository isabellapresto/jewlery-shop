import React from 'react';
import ProductList from "../ProductList/ProductList";
// import ProductDetails from "../ProductDetails/ProductDetails";
import Login from "../Login/Login";
import {Routes, Route} from 'react-router-dom';
import CheckOut from "../CheckOut/CheckOut";
import About from "../About/About";


export default function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<ProductList />} />
        <Route path='/:about' element= {<About />} />
        <Route path='/:checkout' element= {<CheckOut />} />
      {/* <Route path='/:id' element= {<ProductDetails />} /> */}
        <Route path='/:login' element= {<Login />} />
      </Routes>
      
      
    </div>
  );
}

