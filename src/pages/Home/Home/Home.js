import React from "react";
import Contact from "../../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Services from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
