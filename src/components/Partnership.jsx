import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Partnership = () => {
  return (
    <div className=" bg-[url('/src/assets/section-bg.jpeg')] bg-center md:px-20 px-5 bg-cover w-full h-[300px] ">
      <div className="lg:w-[583px] md:py-10 text-white">
        <h2 className="md:text-4xl text-3xl mb-5">
          Are you in the process of creating the next great thing?
        </h2>
        <p className="mb-5">
          We are deeply committed to assisting startups that aim to address
          social challenges in Africa.
        </p>
        <Link to="contact">
          <Button title="Partner with us" />
        </Link>
      </div>
    </div>
  );
};

export default Partnership;
