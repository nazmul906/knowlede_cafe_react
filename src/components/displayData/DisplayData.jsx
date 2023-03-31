import React from "react";
import "./display.css";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = () => toast("Double clicked");
const DisplayData = (props) => {
  const [toastCount, setToastCount] = useState(0);
  // const cnt = props.bookmarkCount;

  // const notify = () => toast("You have already bookmarked this!");
  // if (cnt > 1) {
  //   notify();
  // }

  const handleToast = () => {
    const newcount = toastCount + 1;
    setToastCount(newcount);
  };
  useEffect(() => {
    if (toastCount > 1) {
      notify();
    }
  }, [toastCount]);

  // console.log("cnt", toastCount);
  // if (toastCount > 1) {
  //   console.log("cnt is clicked");
  //   notify(); //if we do like this it render multiple times so rather use USeeffect to control it
  // }

  const {
    id,
    publish_date,
    blog_cover_image,
    author,
    title,
    images,
    read_time,
  } = props.blog;

  // const handleDashboard = () => {
  //   console.log("clicked");
  // };
  const handleDashboard = props.handleDashboard;
  const handleMarkAsRead = props.handleMarkAsRead;
  return (
    <div className="displaydata">
      <div>
        <ToastContainer />
      </div>
      <img src={images.blog_cover_image}></img>
      <div className="firstPara">
        <div className="firstpartOfFirstPara">
          {/* <img src={images.author_image}> </img> */}

          <div className="insideFirstpart1">
            <img src={images.author_image}></img>
          </div>
          <div className="insideFirstpart2 ">
            <p className="fs-5 fw-bold">{author}</p>
            <p className="fw-light">{publish_date}</p>
          </div>
        </div>
        <div className="secondpartOfFirstPara">
          <p>{read_time} min read</p>
          <button
            onClick={() => {
              handleDashboard(id);
              handleToast();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bookmark"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            </svg>
          </button>
        </div>
      </div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          handleMarkAsRead(id);
        }}
        className="text-primary text-decoration-underline"
      >
        Mark as read
      </button>
      <ToastContainer />
    </div>
  );
};

export default DisplayData;
