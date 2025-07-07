import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import Reasons from "./components/Reasons";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth font-mont">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
