import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/shop">Shop</Link> | <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}