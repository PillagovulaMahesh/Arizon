import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartcontext";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
