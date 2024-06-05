import React from "react";
import "../home/Home.css";
import Hero from "./hero/Hero";
import SubHero from "./subhero/SubHero";
import Products from "./products/Products";
import Features from "./features/Features";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SubHero />
      <Products />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
