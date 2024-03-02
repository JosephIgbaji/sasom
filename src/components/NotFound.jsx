import React from "react";
import NF from "../assets/404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-24 h-[100%]">
      <img src={NF} alt="not found page" />
      <p className="my-10 text-sasomRed">
        we can't locate the resource you are looking for...
      </p>
      <Link className="bg-primary text-white rounded-2xl p-4" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
