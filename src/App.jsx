import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"; // Import the About component
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />{" "}
          {/* Add the About route */}
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
