import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchPage({ movies, added, setAdded, user }) {
  const [searched, setSearched] = useState("");
  const [searchedMovies, setSearchedMovies] = useState(movies);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchedMovies(movies);
  }, [movies]);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearched(input);

    const filtered = input.trim() === "" 
      ? movies
      : movies.filter((movie) =>
          movie.title.toLowerCase().includes(input.toLowerCase())
        );
    setSearchedMovies(filtered);
  };

  const handleToggleFavourite = (movie) => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (added.find(c => c.id === movie.id)) {
      setAdded(added.filter(m => m.id !== movie.id));
    } else {
      setAdded([...added, movie]);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🔍 Search Movies</h1>
        <p className="page-subtitle">Find your next favorite film</p>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          onChange={handleChange} 
          value={searched}
          placeholder="Search for a movie..."
          className="search-input"
        />
      </div>

      {movies.length === 0 ? (
        <div className="loading">Loading movies...</div>
      ) : searchedMovies.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎥</div>
          <p>No movies found matching "{searched}"</p>
          <p className="empty-subtitle">Try a different search term</p>
        </div>
      ) : (
        <>
          <p className="search-results">
            Found {searchedMovies.length} {searchedMovies.length === 1 ? 'movie' : 'movies'}
          </p>
          <div className="movie-grid">
            {searchedMovies.map((movie) => (
              movie.poster_path && (
                <div key={movie.id} className="movie-card">
                  <div 
                    className="movie-poster"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="movie-overlay">
                      <span className="view-details">View Details</span>
                    </div>
                  </div>
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="movie-rating">
                      <span>⭐</span>
                      {movie.vote_average?.toFixed(1) || 'N/A'}
                      <span className="rating-count">({movie.vote_count})</span>
                    </div>
                    <p className="movie-year">{movie.release_date?.split('-')[0] || 'N/A'}</p>
                  </div>
                  <button 
                    onClick={() => handleToggleFavourite(movie)}
                    className={`btn-favourite ${added.find(c => c.id === movie.id) ? 'added' : ''}`}
                  >
                    {added.find(c => c.id === movie.id) ? (
                      <>❤️ Remove from Favourites</>
                    ) : (
                      <>🤍 Add to Favourites</>
                    )}
                  </button>
                </div>
              )
            ))}
          </div>
        </>
      )}
    </div>
  );
}
