import React from "react";
import BlogContent from "./BlogContent";
import Button from "./Button";
import { Link } from "react-router-dom";

const Blogs = ({ onBlogPage, BlogTitle }) => {
  return (
    <div className="md:px-20 px-5 mt-10">
      <h2 className="mb-5 text-2xl font-bold">{BlogTitle}</h2>
      <div className=" justify-between items-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 flex-1 flex-wrap">
          <BlogContent />
          <BlogContent />
          <BlogContent />
        </div>
        {!onBlogPage && (
          <Link to={"/blogs"}>
            {" "}
            <Button title="Visit our blog" />
          </Link>
        )}
      </div>
    </div>
  );
};

Blogs.defaultProps = {
  BlogTitle: "All Blog Post",
};
export default Blogs;
