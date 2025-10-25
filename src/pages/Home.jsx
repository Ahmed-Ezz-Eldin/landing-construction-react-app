import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Testmonials from "../components/Testmonials";
import ContactUs from "../components/Contactus";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testmonials />
      <ContactUs />
    </div>
  );
};

export default Home;
