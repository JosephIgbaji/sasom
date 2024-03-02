import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Contents from "../components/Contents";
import Partnership from "../components/Partnership";
import Blog from "../components/Blogs";

const Home = () => {
  return (
    <main className="pt-28">
      <Hero />
      <Partners />
      <Contents />
      <Partnership />
      <Blog />
    </main>
  );
};

export default Home;
