import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="h-[334px] bg-gradient text-white flex flex-col items-center justify-center md:px-20 px-5">
      <h1 className="font-bold text-2xl mb-5 text-center">
        Fostering innovation and advocating for collaboration.
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // animate={{ x: [0, 100, 0] }}
        transition={{ ease: "easeIn", duration: 1.5 }}
        className="max-w-[800px] text-center"
      >
        We are cultivating top-tier tech professionals, creating innovative
        solutions to address challenges, and assisting you in turning your
        aspirations into tangible achievements
      </motion.p>
    </div>
  );
};

export default AboutHero;
