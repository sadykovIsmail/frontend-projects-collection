import { useState } from "react";

export default function SearchPage({ movies }) {
  const [searched, setSearched] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearched(input);

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(input.toLowerCase())
    );
    setSearchedMovies(filtered);
  };

  return (
    <div>
      <h1>Search</h1>
      <input type="text" onChange={handleChange} value={searched} style={{marginBottom: "1rem"}}/>
      <div>
        {movies.length === 0 ? (
<p>Loading...</p>
        ) : 
searchedMovies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          searchedMovies.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        )}
        
      </div>
    </div>
  );
}
