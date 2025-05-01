import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        marginBottom: "1rem",
      }}
    >
      <h1>Product Catalog</h1>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;
