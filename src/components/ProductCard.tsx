import React from "react";
import { Product } from "../types/Product";
import styled from "styled-components";

// Styled Components for the Product Card
const CardContainer = styled.div`
  background-color: #2d2d2d;
  color: #fff;
  border-radius: 10px;
  width: 250px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%; // Ensures the card can grow based on content

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 75%; // Aspect ratio 4:3 (adjust this ratio to your needs)
  position: relative;
  background-color: #fff; // White background behind the image
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; // Added rounded corners for the white background
  overflow: hidden; // Ensure the image inside respects the rounded edges
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); // Center image horizontally
  width: 100%;
  height: 100%;
  object-fit: contain; // Ensure the image is fully visible
  border-radius: 10px; // Added rounded corners to the image
`;

const ProductTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f1f1f1;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #dcdcdc;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <CardContainer>
      <ProductImageWrapper>
        <ProductImage src={product.image} alt={product.title} />
      </ProductImageWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton onClick={onAddToCart}>Add to Cart</AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;
