import React from "react";
import "./display.css";
const DisplayData = (props) => {
  console.log(props);
  const { id, publish_date, author, title, images, read_time } = props.blog;

  // const handleDashboard = () => {
  //   console.log("clicked");
  // };
  const handleDashboard = props.handleDashboard;
  const handleMinRead = props.handleMinRead;
  return (
    <div className="displaydata">
      <img src={images.blog_cover_image}></img>
      <div className="firstPara">
        <div className="firstpartOfFirstPara">
          {/* <img src={images.author_image}> </img> */}
          <p>Author pic</p>
          <div className="insideFirstpart">
            <p>{author}</p>
            <p>{publish_date}</p>
          </div>
        </div>
        <div className="secondpartOfFirstPara">
          <p>{read_time} min read</p>
          <button
            onClick={() => {
              handleDashboard(id);
            }}
          >
            Click
          </button>
        </div>
      </div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          handleMinRead(id);
        }}
      >
        min as read
      </button>
    </div>
  );
};

export default DisplayData;
