import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// import { CurrentUserProvider } from "./components/CurrentUserContext";

const App = () => {
  return (
    <div>
      {/* <CurrentUserProvider> */}
      <Header/>
      <MainContent />
      <Footer/>
    {/* </CurrentUserProvider> */}
     
    </div>
  );
};

export default App;