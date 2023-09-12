import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Routes/Home";
import Movie from "./Routes/Movie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Popular" element={<Movie />} />
      </Routes>
    </>
  );
}

export default App;
