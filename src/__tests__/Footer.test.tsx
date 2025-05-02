// Footer.test.tsx
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Footer component", () => {
  test("renders footer title", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/stay connected/i)).toBeInTheDocument();
  });

  test("renders all footer links", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test("renders copyright and email", () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/© 2025 staver maxim/i)).toBeInTheDocument();
    expect(screen.getByText(/stavermaxim9@gmail.com/i)).toBeInTheDocument();
  });
});
