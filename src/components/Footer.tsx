import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #121212;
  color: #e1e1e1;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 15px;
  margin-top: 3rem;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2); /* Optional: adds shadow at the top */
`;

const FooterTitle = styled.h3`
  font-size: 2rem;
  color: #f1f1f1;
  margin-bottom: 1.5rem;
  font-family: "Arial", sans-serif;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #f1f1f1;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #ff6347; /* Highlight color on hover */
  }

  &.active {
    color: #ff6347;
    font-weight: bold;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: #bbb;
  margin-top: 1.5rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTitle>Stay Connected</FooterTitle>

      <FooterLinks>
        <FooterLink href="/" target="_blank" rel="noopener noreferrer">
          Home
        </FooterLink>
        <FooterLink href="/cart" target="_blank" rel="noopener noreferrer">
          Cart
        </FooterLink>
        <FooterLink href="/about" target="_blank" rel="noopener noreferrer">
          About Us
        </FooterLink>
        <FooterLink
          href="http://www.linkedin.com/in/maxim-staver-b976532b9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </FooterLink>
      </FooterLinks>

      <FooterText>&copy; 2025 Staver Maxim</FooterText>
      <FooterText>stavermaxim9@gmail.com</FooterText>
    </FooterContainer>
  );
};

export default Footer;
