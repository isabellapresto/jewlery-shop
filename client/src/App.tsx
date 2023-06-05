import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import  UserProvider  from "./components/CurrentUserContext";

import ProductProvider from "./context/ProductContext";
import ShoppingCartProvider from "./context/CartContext";


const App = () => {
  return (
    <div>
      <ShoppingCartProvider>
      <UserProvider>
      <ProductProvider>
        <Header/>
        <MainContent />
        <Footer/>
    </ProductProvider>
    </UserProvider>
    </ShoppingCartProvider>
   

    </div>
  );
};

export default App;