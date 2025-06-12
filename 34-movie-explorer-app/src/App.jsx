import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails"
import { useState } from "react";
import FavouritePage from "./pages/FavouritePage";
import Navbar from "./components/Navbar";

export default function App () {
  const[added, setAdded] = useState([])
  return(
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<HomePage added={added} setAdded={setAdded}/>}/>
  <Route path="/movie/:id" element={<MovieDetails />}/>
  <Route path="/favourite" element={<FavouritePage added={added} />}/>
</Routes>

</BrowserRouter>
  )
}