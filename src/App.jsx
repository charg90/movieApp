import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/:movie" element={<Results />} />
    </Routes>
  );
}

export default App;
