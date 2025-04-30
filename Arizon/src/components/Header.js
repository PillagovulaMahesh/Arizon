import React, { useState } from "react";
import MiniCart from "./MiniCart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white sticky top-0 z-10">
      <div className="text-xl font-bold">ShopLogo</div>
      <nav className="space-x-4">
        <a href="/" className="text-gray-600 hover:text-black">Home</a>
        <a href="/products" className="text-gray-600 hover:text-black">Products</a>
        <button onClick={() => setShowCart(!showCart)} className="relative">
  
        </button>
        {showCart && <MiniCart />}
      </nav>
    </header>
  );
};

export default Header;
