import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-content">
        <Link to="/" className="nav-logo">🎬 MOVIEBOX</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/favourite">Favourites</Link>
          <Link to="/search">Search</Link>
        </div>
      </div>
    </nav>
  );
}