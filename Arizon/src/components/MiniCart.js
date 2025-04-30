import React from "react";
import { useCart } from "../context/CartContext";

const MiniCart = () => {
  const { cart } = useCart();

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 bg-white border shadow-lg p-4 w-80">
      <h2 className="text-lg font-semibold">Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.items.map(item => (
            <div key={item.id} className="flex items-center gap-2 my-2">
              <img src={item.image} className="w-10 h-10 object-contain" alt={item.title} />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs">Qty: {item.quantity}</p>
                <p className="text-xs">${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
            <button className="mt-2 w-full bg-blue-600 text-white py-1 rounded">View Cart</button>
            <button className="mt-2 w-full bg-gray-400 text-white py-1 rounded" disabled>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;

