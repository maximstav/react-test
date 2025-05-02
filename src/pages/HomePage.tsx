import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/Product";
import styled from "styled-components";

// Importing the cover photo
import coverPhoto from "../assets/website_cover.png";

// Styled components for the page
const PageContainer = styled.div`
  background-color: #121212;
  color: #e1e1e1;
  padding: 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const CoverPhoto = styled.div`
  background-image: url(${coverPhoto});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #f1f1f1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FilterLabel = styled.label`
  font-size: 1.1rem;
  color: #ddd;
  display: flex;
  flex-direction: column;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #444;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  &:focus {
    background-color: #444;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; // Two items per row on mobile
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // One item per row on very small screens
  }
`;

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("none");

  const { addToCart } = useCart();

  const fetchProducts = (category: string) => {
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${encodeURIComponent(
            category
          )}`;

    fetch(url)
      .then((res) => res.json())
      .then((data: Product[]) => {
        let sorted = [...data];
        if (sortOrder === "asc") {
          sorted.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
          sorted.sort((a, b) => b.price - a.price);
        }
        setProducts(sorted);
      });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetchProducts("all");
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory, sortOrder]);

  return (
    <PageContainer>
      {/* Cover Photo Section */}
      <CoverPhoto />

      <Title>Products</Title>

      <FiltersContainer>
        <FilterLabel>
          Filter by category:
          <FilterSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FilterSelect>
        </FilterLabel>

        <FilterLabel>
          Sort by price:
          <FilterSelect
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">None</option>
            <option value="asc">Lowest to Highest</option>
            <option value="desc">Highest to Lowest</option>
          </FilterSelect>
        </FilterLabel>
      </FiltersContainer>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ProductGrid>
    </PageContainer>
  );
};

export default HomePage;
