import React from "react";
import styled from "styled-components";
import { CartItemType } from "../types/CartItemType";
import { useCart } from "../context/CartContext";

const CartItemWrapper = styled.div`
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
  width: 120px;
  height: 120px;
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
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
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #388e3c;
  }
`;

const RemoveButton = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #e53935;
  }

  &:active {
    background-color: #d32f2f;
  }
`;

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <CartItemWrapper>
      <ItemImageWrapper>
        <ItemImage src={item.image} alt={item.title} />
      </ItemImageWrapper>
      <ItemDetails>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
        <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
      </ItemDetails>
      <ActionButtons>
        <ActionButton onClick={() => decreaseQuantity(item.id)}>-</ActionButton>
        <ActionButton onClick={() => increaseQuantity(item.id)}>+</ActionButton>
        <RemoveButton onClick={() => removeFromCart(item.id)}>
          Remove
        </RemoveButton>
      </ActionButtons>
    </CartItemWrapper>
  );
};

export default CartItem;
