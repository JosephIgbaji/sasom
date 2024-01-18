import React from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import HeroImage from "../assets/lady-with-laptop.png";

const Hero = () => {
  return (
    <header className="md:h-[600px] bg-primary w-full px-5 py-10 md:px-20 bg-opacity-40 flex flex-col-reverse md:flex-row items-center">
      <section className="mt-10 md:mt-0">
        <h1 className="text-4xl font-bold text-black mb-5">
          Fostering Innovations, <br />
          Enabling Transformation
        </h1>
        <p>
          We are establishing an environment that fosters technological <br />
          entrepreneurship and boosts economic development.
        </p>
        <div className="mt-5 flex gap-5">
          <Button title="Book a consultation" />
          <ButtonOutline title="Learn More" />
        </div>
      </section>
      <section className="md:w-[654px] md:h-[586.99px]">
        <img src={HeroImage} alt="lady with a laptop" />
      </section>
    </header>
  );
};

export default Hero;
