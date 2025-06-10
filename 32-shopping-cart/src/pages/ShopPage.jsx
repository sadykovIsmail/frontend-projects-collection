import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      {products.map(p => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <img src={p.image} alt={p.title} width="100" />
        </div>
      ))}
    </div>
  );
}
