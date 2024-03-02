import React from "react";
import Contents from "../../components/Contents";
import Partners from "../../components/Partners";
import Blogs from "../../components/Blogs";

const Blog = () => {
  return (
    <div className="pt-28">
      <Blogs onBlogPage={true} />
      <Contents />
      <Partners />
    </div>
  );
};

export default Blog;
