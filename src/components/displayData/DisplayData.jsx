import React from "react";
import "./display.css";
const DisplayData = (props) => {
  console.log(props.blog);
  const { id, publish_date, author, title, images, read_time } = props.blog;
  return (
    <div className="displaydata">
      <h6>Inside Displaydata</h6>
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
          <p>{read_time}</p>
          <button>Click</button>
        </div>
      </div>
      <h2>{title}</h2>
      <button> mark as read</button>
    </div>
  );
};

export default DisplayData;
