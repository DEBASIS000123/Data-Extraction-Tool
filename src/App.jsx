import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ExtractData from "./components/ExtractData"; // Import the ExtractData component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extract" element={<ExtractData />} />{" "}
          {/* Add the ExtractData route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
