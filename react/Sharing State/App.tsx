import React, { useState } from "react";
import { Cart } from "./Cart";
import { Navbar } from "./Navbar";

function App() {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <Navbar productCount={cartItems.length} />
      <Cart products={cartItems} handleClearCart={() => setCartItems([])} />
    </div>
  );
}

export default App;
