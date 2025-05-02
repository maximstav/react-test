import React from "react";
import { Link } from "react-router-dom";
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
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #f1f1f1;
  margin: 0;
  font-family: "Arial", sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #f1f1f1;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #ff6347; /* Change to a highlighted color when hovered */
  }

  &.active {
    color: #ff6347;
    font-weight: bold;
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
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/cart" activeClassName="active">
          Cart
          {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
