import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { describe, it, expect, vi } from "vitest";

// Mock product
const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 29.99,
  image: "https://example.com/image.jpg",
  category: "Test",
  description: "Test description",
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    const mockHandler = vi.fn();

    render(<ProductCard product={mockProduct} onAddToCart={mockHandler} />);

    // Check if title, price, and image are rendered
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  it("calls onAddToCart when button is clicked", () => {
    const mockHandler = vi.fn();

    render(<ProductCard product={mockProduct} onAddToCart={mockHandler} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
