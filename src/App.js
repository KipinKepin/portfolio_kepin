import React from "react";
import "./index.css";
import Home from "./router/Home";
import About from "./router/About";
import Project from "./router/Project";
import Contact from "./router/Contact";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
