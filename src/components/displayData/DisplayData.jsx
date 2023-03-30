import React from "react";
import "./display.css";
const DisplayData = (props) => {
  console.log(props.blog);
  const { id, author, title, images, read_time } = props.blog;
  return (
    <div className="displaydata">
      <h6>Inside Displaydata</h6>
      <img src={images.blog_cover_image}></img>
      <div>
        {/* <img src={images.author_image}> </img> */}
        <p>author:{author}</p>
      </div>

      <h1>title:{title}</h1>
      <p>read_time:{read_time}</p>
      <button> mark as read</button>
    </div>
  );
};

export default DisplayData;
