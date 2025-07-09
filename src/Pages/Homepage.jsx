import React from "react";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Reasons from "../components/Reasons";
import Hero from "../components/Hero";
import Info from "../components/Info";
import CTA from "../components/CTA";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Reasons />
      <CTA />
      <Testimonials />
    </main>
  );
};

export default Homepage;
