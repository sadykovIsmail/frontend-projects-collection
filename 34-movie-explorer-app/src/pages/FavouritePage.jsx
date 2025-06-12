export default function ({added}) {
return(
    <div>
<h1>Favourite Movies</h1>
    {added.length === 0 ? (
<p>No movies added to favourite</p>
    ) : (
added.map(movie => (
<>
<img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: "100%" }}
                />
                <h3>{movie.title}</h3>
                </>
))
    )}

    </div>
    
)
}