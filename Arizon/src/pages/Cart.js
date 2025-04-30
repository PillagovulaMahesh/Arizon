import React from "react";
import { useCart } from "../context/cartcontext";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cart.items.map(item => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-2">-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-2">+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <div className="text-right mt-4">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" disabled>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
