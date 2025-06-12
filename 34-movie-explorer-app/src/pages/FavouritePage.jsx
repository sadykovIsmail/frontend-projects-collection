export default function ({added}) {
return(
    <div>
<h1>Favourite Movies</h1>
    {added.length === 0 ? (
<p>No movies added to favourite</p>
    ) : (
added.map(movie => (
<>
<h2>{movie.title}</h2>
<img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                
                />
                
                </>
))
    )}

    </div>
    
)
}