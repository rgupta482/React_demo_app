import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";
import Header from "./Components/Header.jsx";
import Meals from "./Components/Meals.jsx";
import { CartContextProvider } from "./Store/CartContext.jsx";
import { UserProgressContextProvider } from "./Store/UserProgressContext.jsx";

function App() {
  return (
        <UserProgressContextProvider>
          <CartContextProvider>
            <Header />
            <Meals />
            <Cart />
            <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
  );
}

export default App;
