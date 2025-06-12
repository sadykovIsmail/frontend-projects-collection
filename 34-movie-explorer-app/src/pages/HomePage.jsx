import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function HomePage () {
    const[movies, setMovies] = useState([])
    const[loading, setLoading] = useState(true)

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3f6bba2f4b3f246b7b2a2ebc2c938d63`)
        .then(res => res.json)
        .then(data => setMovies(data.results))
    })
    return(
        <div>
<h1>Movies</h1>
{movies.map((movie) => {
    <div key={movie.id} style={{ cursor: "pointer" }}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    </div>
})}
        </div>
    )
    

}