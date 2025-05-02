import React from "react";
import { Link, NavLink } from "react-router-dom"; // Use NavLink from react-router-dom
import { useCart } from "../context/CartContext";
import styled from "styled-components";

// Styled components for the header
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #1f1f1f;
  color: #f1f1f1;
  border-bottom: 2px solid #444;
  margin-bottom: 1rem;
  border-radius: 15px; /* Rounded edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: adds a subtle shadow for better separation */

  /* Media Query for Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #f1f1f1;
  margin: 0;
  font-family: "Arial", sans-serif;

  /* Media Query for Mobile */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  /* Media Query for Mobile */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding-top: 1rem;
    align-items: flex-start;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #f1f1f1;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.8rem 1.5rem; /* Make the link look like a button */
  border: 2px solid #f1f1f1; /* Button border */
  border-radius: 8px; /* Rounded corners */
  background-color: transparent; /* Transparent background */
  transition: all 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    background-color: #ff6347; /* Background color on hover */
    color: white; /* Text color on hover */
    border-color: #ff6347; /* Border color on hover */
  }

  &.active {
    background-color: #ff6347; /* Active background */
    color: white; /* Active text color */
    font-weight: bold;
  }

  /* Media Query for Mobile */
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0.8rem;
  }
`;

const CartCount = styled.span`
  background-color: #ff6347;
  border-radius: 50%;
  padding: 0.2rem 0.5rem;
  color: white;
  font-size: 1rem;
  margin-left: 0.5rem;
`;

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <Logo>Product Catalog</Logo>
      <Nav>
        <StyledNavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </StyledNavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
