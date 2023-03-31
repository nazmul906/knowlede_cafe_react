import React from "react";
import { useEffect, useState } from "react";
import "./blogpost.css";
import DisplayData from "../displayData/DisplayData";
import Dashboard from "../dashboard/Dashboard";
const BlogPost = () => {
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);
  const [minread, setMinread] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const handleDashboard = (id) => {
    //const savecart = [];
    // console.log("I am clicked from blogpost", id);
    const newCount = count + 1;
    setCount(newCount);
    // ei id r sathe sathe oi post ta lagbe..so amra ei id diye post object ta map krle tader pabo

    // for (const id in post) {
    //console.log("po", id);
    //const addedProduct = post.find((item) => item.id === id);
    const foundObject = post.find((obj) => obj.id === id);
    // console.log("added", foundObject);
    // savecart.push(foundObject);
    // console.log("saved", savecart);
    const newsave = [...bookmarked, foundObject];
    console.log("saveed 2:0", newsave);
    setBookmarked(newsave);

    // }
  };

  const handleMinRead = (pid) => {
    //  console.log("I am clicked by mark read", id);
    const marked = post.find((item) => item.id === pid);
    const saved = [...minread, marked];
    console.log("marked", saved);
    setMinread(saved);
  };
  return (
    <div className="mainContainer">
      <div className="blogdisplaycontainer">
        {/* <h1>Blog Post</h1> */}
        {/* {bookmarked.map((item) => console.log("bookmark", item))} */}
        <h6>Total Blog: {post.length}</h6>
        {post.map((item) => {
          return (
            <DisplayData
              key={item.id}
              blog={item}
              handleDashboard={handleDashboard}
              handleMinRead={handleMinRead}
            ></DisplayData>
          );
        })}
      </div>
      <div className="dashboardContainer">
        <Dashboard
          dashData={count}
          bookmarked={bookmarked}
          minread={minread}
        ></Dashboard>
      </div>
    </div>
  );
};

export default BlogPost;
