import React from "react";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

// Styled Components for the Cart Page
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

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #444;
  background-color: #1c1c1c;
  border-radius: 8px;
  padding: 1rem;
`;

const ItemImageWrapper = styled.div`
  width: 120px; // Increased width
  height: 120px; // Increased height
  position: relative;
  background-color: #fff; // White background behind the image
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; // Rounded corners for the image background
  overflow: hidden; // Ensure the image inside respects the rounded edges
`;

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); // Center image horizontally
  width: 100%;
  height: 100%;
  object-fit: contain; // Ensure the image is fully visible
  border-radius: 10px; // Added rounded corners to the image
`;

const ItemDetails = styled.div`
  flex: 1;
  color: #ddd;
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ItemQuantity = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const ActionButton = styled.button`
  background-color: #4caf50; /* Green background for add/remove buttons */
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #388e3c;
  }
`;

const RemoveButton = styled.button`
  background-color: #f44336; /* Red background for remove button */
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53935;
  }

  &:active {
    background-color: #d32f2f;
  }
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
        <CartItem key={item.id}>
          <ItemImageWrapper>
            <ItemImage src={item.image} alt={item.title} />
          </ItemImageWrapper>
          <ItemDetails>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
          </ItemDetails>
          <ActionButtons>
            <ActionButton onClick={() => decreaseQuantity(item.id)}>
              -
            </ActionButton>
            <ActionButton onClick={() => increaseQuantity(item.id)}>
              +
            </ActionButton>
            <RemoveButton onClick={() => removeFromCart(item.id)}>
              Remove
            </RemoveButton>
          </ActionButtons>
        </CartItem>
      ))}

      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
      <div style={{ textAlign: "center" }}>
        <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
      </div>
    </CartContainer>
  );
};

export default CartPage;
