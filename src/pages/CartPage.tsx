// src/pages/CartPage.tsx
import React from "react";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div style={{ padding: "1rem" }}>Your cart is empty.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "1rem",
          }}
        >
          <img src={item.image} alt={item.title} width={80} height={80} />
          <div style={{ flex: 1 }}>
            <h4>{item.title}</h4>
            <p>${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
