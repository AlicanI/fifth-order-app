import React, { useState } from "react";
import { Header, Meals, Cart, CartProvider } from "./components/Exporter";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownHandler = () => {
    if (cartIsShown === false) {
      setCartIsShown(true);
    } else {
      setCartIsShown(false);
    }
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onShownHandler={shownHandler} />}
      <Header onShownHandler={shownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
