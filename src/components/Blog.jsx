import React from "react";
import BlogContent from "./BlogContent";
import Button from "./Button";

const Blog = () => {
  return (
    <div className="md:px-20 px-5 mt-10">
      <h2 className="mb-5 text-2xl font-bold">Blog</h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around gap-8 mb-10 flex-1 flex-wrap">
          <BlogContent />
          <BlogContent />
          <BlogContent />
        </div>
        <Button title="Visit our blog" />
      </div>
    </div>
  );
};

export default Blog;
