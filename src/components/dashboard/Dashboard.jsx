import React from "react";
import "./dashboard.css";
const Dashboard = (props) => {
  // this props contain 2 handleclick function and a count for bookmark
  //const { dashData } = props.dashData;
  //  const [bookmarked] = props.bookmarked;
  let count = 0;

  props.minread.forEach((item) => {
    count = count + parseInt(item.read_time);
    console.log("count", count);
    return count;
  });
  // console.log("inside dashboard bookmark ", props);

  return (
    <div className="dashboard">
      {/* {props.bookmarked.length} */}
      <h4 style={{ color: "#6047ec", textAlign: "center" }}>
        Time spent on read :{count} min
      </h4>
      <div style={{ marginTop: "25px" }}>
        <h3 style={{ textAlign: "center" }}>
          {" "}
          Bookmarked Blog: {props.bookmarkCount}
        </h3>

        {props.bookmarked.map((item) => {
          return (
            <div className="blogTitle  bg-primary">
              <h5 className="blogtext">{item.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
