import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CarsPage from "./Pages/CarsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </>
  );
}

export default App;
