// pages/ShopPage.jsx
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
