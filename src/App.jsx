import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Homepage from "./Pages/Homepage";
import Secondpage from './Pages/Secondpage';

const App = () => {
  return (
    <div className="overflow-x-hidden scroll-smooth font-mont">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/second_page" element={<Secondpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
