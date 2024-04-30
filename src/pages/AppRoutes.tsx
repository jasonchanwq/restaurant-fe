import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";

function AppRoutes(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
