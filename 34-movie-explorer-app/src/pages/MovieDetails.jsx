import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails({ user, added, setAdded }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aab42947643ea66936cdffa7b88822e2`)
      .then(res => res.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [id]);

  const handleToggleFavourite = () => {
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
    return <div className="loading">🎬 Loading movie details...</div>;
  }

  if (!movie) {
    return <div className="empty-state">Movie not found</div>;
  }

  const isFavourite = added.find(c => c.id === movie.id);

  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)} className="btn-back">
        ← Back
      </button>
      
      <div className="movie-hero">
        <div className="movie-poster-container">
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title}
            className="movie-poster-large"
          />
          <button 
            onClick={handleToggleFavourite}
            className={`btn-favourite-large ${isFavourite ? 'added' : ''}`}
          >
            {isFavourite ? '❤️ Remove from Favourites' : '🤍 Add to Favourites'}
          </button>
        </div>

        <div className="movie-details-content">
          <h1>{movie.title}</h1>
          {movie.tagline && <p className="movie-tagline">"{movie.tagline}"</p>}
          
          <div className="movie-stats">
            <div className="stat-item">
              <span className="stat-label">Rating</span>
              <span className="stat-value">⭐ {movie.vote_average?.toFixed(1)}/10</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Runtime</span>
              <span className="stat-value">⏱️ {movie.runtime} min</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Release</span>
              <span className="stat-value">📅 {movie.release_date}</span>
            </div>
          </div>

          <div className="movie-section">
            <h2>Overview</h2>
            <p className="movie-overview">{movie.overview}</p>
          </div>

          <div className="movie-section">
            <h2>Details</h2>
            <div className="movie-meta">
              <p><strong>🎭 Genres:</strong> {movie.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
              <p><strong>🌍 Language:</strong> {movie.original_language?.toUpperCase() || 'N/A'}</p>
              <p><strong>💰 Budget:</strong> {movie.budget ? `$${(movie.budget / 1000000).toFixed(1)}M` : 'N/A'}</p>
              <p><strong>💵 Revenue:</strong> {movie.revenue ? `$${(movie.revenue / 1000000).toFixed(1)}M` : 'N/A'}</p>
              {movie.production_companies?.length > 0 && (
                <p><strong>🏢 Studios:</strong> {movie.production_companies.slice(0, 3).map(c => c.name).join(', ')}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
