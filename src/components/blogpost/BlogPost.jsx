import React from "react";
import { useEffect, useState } from "react";
import "./blogpost.css";
import DisplayData from "../displayData/DisplayData";
import Dashboard from "../dashboard/Dashboard";
const BlogPost = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div className="mainContainer">
      <div className="blogdisplaycontainer">
        {/* <h1>Blog Post</h1> */}
        <h6>Total Blog: {post.length}</h6>
        {post.map((item) => {
          return <DisplayData key={item.id} blog={item}></DisplayData>;
        })}
      </div>
      <div className="dashboardContainer">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
};

export default BlogPost;
