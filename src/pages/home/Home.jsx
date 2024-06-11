import React from "react";
import Hero from "./hero/Hero";
import SubHero from "./subhero/SubHero";
import Products from "./products/Products";
import Features from "./features/Features";
import Testimonial from "./testimonial/Testimonial";
// import Sub from "./sub/Sub";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SubHero />
      {/* <Sub /> */}
      <Products />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
