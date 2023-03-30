import React from "react";
import { useEffect, useState } from "react";
import "./blogpost.css";
import DisplayData from "../displayData/DisplayData";
import Dashboard from "../dashboard/Dashboard";
const BlogPost = () => {
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const handleDashboard = (id) => {
    console.log("I am beign clicked from blogpost", id);
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div className="mainContainer">
      <div className="blogdisplaycontainer">
        {/* <h1>Blog Post</h1> */}
        <h6>Total Blog: {post.length}</h6>
        {post.map((item) => {
          return (
            <DisplayData
              key={item.id}
              blog={item}
              handleDashboard={handleDashboard}
            ></DisplayData>
          );
        })}
      </div>
      <div className="dashboardContainer">
        <Dashboard dashData={count}></Dashboard>
      </div>
    </div>
  );
};

export default BlogPost;
