import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=aab42947643ea66936cdffa7b88822e2")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data:", data); 
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {movies.map((movie) => (
            movie.poster_path && (
              <div
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
                style={{ cursor: "pointer", width: "200px" }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "100%" }}
                />
                <h3>{movie.title}</h3>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
