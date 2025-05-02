// src/styles/globalStyles.ts
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Resetting default margin and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body styles */
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #121212; /* Dark background */
    color: #E0E0E0; /* Light text color */
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Links styles */
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #6200ea; /* Highlight on hover */
  }

  /* Container for centering content */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  /* Styling buttons globally */
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: #6200ea; /* Purple background */
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    transition: background-color 0.3s, transform 0.3s ease;
  }

  /* Button hover effect */
  button:hover {
    background-color: #3700b3; /* Darker purple on hover */
    transform: scale(1.05);
  }

  /* Product card styles */
  .product-card {
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }

  .product-card:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  .product-card img {
    max-width: 100%;
    border-radius: 5px;
  }

  .product-card h4 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-top: 1rem;
  }

  .product-card p {
    font-size: 1rem;
    color: #b0b0b0;
  }

  .product-card button {
    width: 100%;
    margin-top: 1rem;
    background-color: #03dac6; /* Teal color for the add-to-cart button */
  }

  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .container {
      padding: 0.5rem;
    }
    
    .product-card {
      width: 100%;
    }
  }



  button:focus {
    outline: 2px solid #03dac6; /* Teal outline */
    outline-offset: 2px;
  }

  .product-card:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.03); /* Slight scaling effect */
  }

`;

export default GlobalStyles;
