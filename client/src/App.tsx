import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import  UserProvider  from "./components/CurrentUserContext";

const App = () => {
  return (
    <div>
      <UserProvider>
      <Header/>
      <MainContent />
      <Footer/>
    </UserProvider>
     
    </div>
  );
};

export default App;