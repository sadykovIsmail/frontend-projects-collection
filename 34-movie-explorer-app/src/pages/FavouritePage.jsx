import { useNavigate } from "react-router-dom";

export default function FavouritePage({ added, setAdded }) {
  const navigate = useNavigate();

  const handleRemove = (movieId) => {
    setAdded(added.filter(m => m.id !== movieId));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>❤️ My Favourites</h1>
        <p className="page-subtitle">
          {added.length === 0 
            ? "Start building your collection" 
            : `You have ${added.length} ${added.length === 1 ? 'movie' : 'movies'} saved`
          }
        </p>
      </div>

      {added.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💔</div>
          <p>No favourites yet!</p>
          <p className="empty-subtitle">Browse movies and add your favourites to see them here.</p>
          <button 
            onClick={() => navigate('/')} 
            className="btn-primary"
            style={{ marginTop: '2rem' }}
          >
            Explore Movies
          </button>
        </div>
      ) : (
        <div className="movie-grid">
          {added.map(movie => (
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
                onClick={() => handleRemove(movie.id)}
                className="btn-favourite added"
              >
                ❤️ Remove from Favourites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}