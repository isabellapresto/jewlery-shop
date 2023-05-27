import ProductList from "../ProductList/ProductList";
// import ProductDetails from "../ProductDetails/ProductDetails";
import Login from "../Login/Login";
import {Routes, Route} from 'react-router-dom';


export default function MainContent() {
  return (
    <div>
      <Routes>
      <Route path='/' element= {<ProductList />} />
      {/* <Route path='/:id' element= {<ProductDetails />} /> */}
      <Route path='/:login' element= {<Login />} />
      </Routes>
      
      
    </div>
  );
}

