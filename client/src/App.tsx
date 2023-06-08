import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { OrderProvider } from "./context/OrderContext";

import UserProvider from "./components/CurrentUserContext";

import ProductProvider from "./context/ProductContext";
import ShoppingCartProvider from "./context/CartContext";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./components/ThemeOptions";

const theme = createTheme(themeOptions);

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ShoppingCartProvider>
          <UserProvider>
            <ProductProvider>
              <Header />
              <MainContent />
              <Footer />
            </ProductProvider>
          </UserProvider>
        </ShoppingCartProvider>
      </ThemeProvider>

      <ShoppingCartProvider>
        <UserProvider>
          <ProductProvider>
            <OrderProvider>
              <Header />
              <MainContent />
              <Footer />
            </OrderProvider>
          </ProductProvider>
        </UserProvider>
      </ShoppingCartProvider>
    </div>
  );
};

export default App;
