import React from "react";
import Image from "../assets/team-meeting.png";

const BlogContent = () => {
  return (
    <div className="w-[320px]">
      <div className="w-[320px] mb-4">
        <img className="rounded-lg" src={Image} alt="" />
      </div>
      <h2 className="mb-4">
        Are you building the next big thing? Here is how we can make
      </h2>
      <p className="text-sm text-opacity-50">2023-12-20</p>
    </div>
  );
};

export default BlogContent;
