import { useNavigate } from "react-router-dom";

export default function FavouritePage({added, setAdded}) {
  const navigate = useNavigate();

  const handleRemove = (movieId) => {
    setAdded(added.filter(m => m.id !== movieId));
  }

  return (
    <div className="page-container">
      <h1>My Favourite Movies</h1>
      {added.length === 0 ? (
        <div className="empty-state">
          <p>No movies added to favourites yet.</p>
          <p style={{marginTop: '1rem'}}>Start adding movies from the home page!</p>
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
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-rating">
                  <span>⭐</span>
                  {movie.vote_average?.toFixed(1) || 'N/A'}
                </div>
              </div>
              <button 
                onClick={() => handleRemove(movie.id)}
                className="btn-favourite added"
              >
                ✗ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}