import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductProvider from "./context/ProductContext";

// import { CurrentUserProvider } from "./components/CurrentUserContext";

const App = () => {
  return (
    <div>
      {/* <CurrentUserProvider> */}
      <ProductProvider>
        <Header/>
        <MainContent />
        <Footer/>
      </ProductProvider>
      
    {/* </CurrentUserProvider> */}
     
    </div>
  );
};

export default App;