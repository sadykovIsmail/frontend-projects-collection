import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage({ added, setAdded, movies, setMovies, user }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=aab42947643ea66936cdffa7b88822e2")
      .then(res => res.json())
      .then(data => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, [setMovies]);

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

  if (loading) {
    return <div className="loading">🎬 Loading trending movies...</div>;
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🔥 Trending This Week</h1>
        <p className="page-subtitle">Discover the hottest movies everyone's watching</p>
      </div>
      
      {movies.length === 0 ? (
        <div className="empty-state">
          <p>No movies found.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
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
      )}
    </div>
  );
}