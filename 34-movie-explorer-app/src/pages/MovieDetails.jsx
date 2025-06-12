import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aab42947643ea66936cdffa7b88822e2`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch((error) => {
        console.error("The error:", error);
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.tagline}</p>
      <p>{movie.overview}</p>
      <p>🎭 Genres: {movie.genres?.map(g => g.name).join(', ')}</p>
      <p>⏱️ Runtime: {movie.runtime} minutes</p>
      <p>📅 Release: {movie.release_date}</p>
    </div>
  );
};

export default MovieDetails;
