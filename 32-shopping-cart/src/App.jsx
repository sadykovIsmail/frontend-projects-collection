import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx"


export default function () {
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />

    
  </Routes>
  </BrowserRouter>
}