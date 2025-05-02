import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const CartContainer = styled.div`
  padding: 2rem;
  background-color: #121212;
  color: #e1e1e1;
  min-height: 100vh;
`;

const CartTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const TotalPrice = styled.h3`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ClearCartButton = styled.button`
  background-color: #444;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #666;
  }
`;

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Shopping Cart</CartTitle>
        <div>Your cart is empty.</div>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
      <div style={{ textAlign: "center" }}>
        <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
      </div>
    </CartContainer>
  );
};

export default CartPage;
