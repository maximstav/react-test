import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <img src={product.image} alt={product.title} width="100" />
      <h4>{product.title}</h4>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

// const ProductCard = ({ product }: { product: Product }) => {
//   const { addToCart } = useCart();
//   console.log("Rendering ProductCard", product); // Debug

//   return (
//     <div>
//       {/* Your card UI */}
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };

export default ProductCard;
