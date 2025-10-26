import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage({added, setAdded, movies, setMovies}) {
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

  const handleAdd = (movie) => {
    if(!added.find(c => c.id === movie.id)){
      setAdded([...added, movie])
    }
  }

  const handleRemove = (movieId) => {
    setAdded(added.filter(m => m.id !== movieId));
  }

  if (loading) return <div className="loading">Loading trending movies...</div>;

  return (
    <div className="page-container">
      <h1>Trending Movies This Week</h1>
      {movies.length === 0 ? (
        <div className="empty-state">No movies found.</div>
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
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-rating">
                    <span>⭐</span>
                    {movie.vote_average?.toFixed(1) || 'N/A'}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    if(added.find(c => c.id === movie.id)) {
                      handleRemove(movie.id);
                    } else {
                      handleAdd(movie);
                    }
                  }}
                  className={`btn-favourite ${added.find(c => c.id === movie.id) ? 'added' : ''}`}
                >
                  {added.find(c => c.id === movie.id) ? '✓ In Favourites' : '+ Add to Favourites'}
                </button>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}