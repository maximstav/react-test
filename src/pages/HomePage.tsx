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
`;

const CoverPhoto = styled.div`
  background-image: url(${coverPhoto});
  background-size: cover;
  background-position: center;
  height: 300px; // Adjust the height as needed
  border-radius: 10px; // Optional, for rounded corners
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #f1f1f1;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
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
`;

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("none");

  const { addToCart } = useCart();

  // Fetch products based on category from URL
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
    // Load categories
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    // Initial load
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
