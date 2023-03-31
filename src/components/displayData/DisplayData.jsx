import React from "react";
import "./display.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const DisplayData = (props) => {
  const notify = () => toast("You have already bookmarked this!");
  //  console.log("disp", props);
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
              notify();
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
    </div>
  );
};

export default DisplayData;
