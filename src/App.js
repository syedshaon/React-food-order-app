import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCatIsShown] = useState(false);

  const showCatHandler = () => {
    setCatIsShown(true);
  };

  const hideCartHandler = () => {
    setCatIsShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCatHandler={showCatHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
