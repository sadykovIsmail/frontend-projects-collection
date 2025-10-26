
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav>
      <div className="navbar-content">
        <Link to="/" className="nav-logo">
          🎬 CINEMATIC
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          {user ? (
            <>
              <Link to="/favourite">My Favourites</Link>
              <div className="user-menu">
                <span className="user-name">👤 {user.username}</span>
                <button onClick={handleLogout} className="btn-logout">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-nav-login">Login</Link>
              <Link to="/signup" className="btn-nav-signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}