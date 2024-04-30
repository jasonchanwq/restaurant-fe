import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function AppRoutes(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
