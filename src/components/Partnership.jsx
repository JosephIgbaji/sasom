import React from "react";
import Button from "./Button";

const Partnership = () => {
  return (
    <div className=" bg-[url('/src/assets/section-bg.jpeg')] bg-center md:px-20 px-5 bg-cover w-full h-[300px] ">
      <div className="lg:w-[583px] md:py-10 text-white">
        <h2 className="text-4xl mb-5">
          Are you in the process of creating the next great thing?
        </h2>
        <p className="mb-5">
          We are deeply committed to assisting startups that aim to address
          social challenges in Africa.
        </p>
        <Button title="Partner with us" />
      </div>
    </div>
  );
};

export default Partnership;
