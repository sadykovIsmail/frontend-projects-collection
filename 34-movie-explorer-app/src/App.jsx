import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails"
import { useState } from "react";
import FavouritePage from "./pages/FavouritePage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

export default function App () {
  const[added, setAdded] = useState([])
  const[movies, setMovies] = useState([])
  return(
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<HomePage added={added} setAdded={setAdded} movies={movies} setMovies={setMovies}/>}/>
  <Route path="/movie/:id" element={<MovieDetails />}/>
  <Route path="/favourite" element={<FavouritePage added={added} />}/>
  <Route path="/search" element={<SearchPage movies={movies}/>}/>
</Routes>

</BrowserRouter>
  )
}