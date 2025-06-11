import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import EnrolledHistory from "./pages/EnrolledHistory";
import { useState } from "react";

export default function App() {
  const [enrolled, setEnrolled] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={
          <CoursesPage enrolled={enrolled} setEnrolled={setEnrolled} />
        } />
        <Route path="/history" element={
          <EnrolledHistory enrolled={enrolled} />
        } />
      </Routes>
    </BrowserRouter>
  );
}
