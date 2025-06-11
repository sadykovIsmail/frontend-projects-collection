import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "1rem" }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="100" />
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={e => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}
