import React, { useState } from "react";
import Header from "./Header";
import MiddleScreenModal from "./components/Modal";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Meals/Cart/Cart";
import CartProvider from "./components/cart-context/CartProvider";


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MiddleScreenModal />
      <Meals />
    </CartProvider>
  );
}

export default App;
