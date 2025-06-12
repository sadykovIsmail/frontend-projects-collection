import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails"

export default function App () {
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />}/>
  <Route path="/movie/:id" element={<MovieDetails />}/>
</Routes>

</BrowserRouter>
  )
}