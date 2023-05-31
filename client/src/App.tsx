import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import  UserProvider  from "./components/CurrentUserContext";

import ProductProvider from "./context/ProductContext";


const App = () => {
  return (
    <div>
     <UserProvider>
      <ProductProvider>
        <Header/>
        <MainContent />
        <Footer/>
      </ProductProvider>
    </UserProvider>
 

     
    </div>
  );
};

export default App;