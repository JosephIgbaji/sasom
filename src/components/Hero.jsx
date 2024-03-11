import React from "react";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import HeroImage from "../assets/lady-with-laptop.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="md:h-[600px] bg-primary w-full px-5 md:py-10 md:px-20 bg-opacity-40 flex md:justify-between flex-col md:flex-row items-center gap-10">
      <motion.section
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="mt-10 md:mt-0"
      >
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="text-4xl font-bold text-black mb-5"
        >
          Fostering Innovations, <br />
          Enabling Transformation
        </motion.h1>
        <motion.p
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          We are establishing an environment that fosters technological <br />
          entrepreneurship and boosts economic development.
        </motion.p>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
          className="mt-5 flex gap-5"
        >
          <Link to="contact">
            <Button title="Book a consultation" />
          </Link>
          <ButtonOutline title="Learn More" />
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="md:w-[654px] md:h-[586.99px] flex items-center"
      >
        <img src={HeroImage} alt="lady with a laptop" />
      </motion.section>
    </header>
  );
};

export default Hero;
