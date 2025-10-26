import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import FavouritePage from "./pages/FavouritePage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [added, setAdded] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Load favourites from localStorage
  useEffect(() => {
    if (user) {
      const storedFavourites = localStorage.getItem(`favourites_${user.id}`);
      if (storedFavourites) {
        setAdded(JSON.parse(storedFavourites));
      }
    }
  }, [user]);

  // Save favourites to localStorage
  useEffect(() => {
    if (user && added.length >= 0) {
      localStorage.setItem(`favourites_${user.id}`, JSON.stringify(added));
    }
  }, [added, user]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setAdded([]);
    localStorage.removeItem('user');
    localStorage.removeItem(`favourites_${user?.id}`);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              added={added} 
              setAdded={setAdded} 
              movies={movies} 
              setMovies={setMovies}
              user={user}
            />
          } 
        />
        <Route 
          path="/movie/:id" 
          element={<MovieDetails user={user} added={added} setAdded={setAdded} />} 
        />
        <Route 
          path="/favourite" 
          element={
            user ? (
              <FavouritePage added={added} setAdded={setAdded} />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/search" 
          element={
            <SearchPage 
              movies={movies} 
              added={added} 
              setAdded={setAdded}
              user={user}
            />
          } 
        />
        <Route 
          path="/login" 
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          } 
        />
        <Route 
          path="/signup" 
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <SignupPage onSignup={handleLogin} />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}