import React from "react";

const Dashboard = (props) => {
  //const { dashData } = props.dashData;
  //  const [bookmarked] = props.bookmarked;
  let count = 0;

  // console.log("inside dashboard bookmark ", props);

  return (
    <div className="dashboard">
      {/* {props.bookmarked.length} */}
      <h4>Time spent on read :{count}</h4>
      <h3> total number of blogs added as bookmark: {props.dashData}</h3>

      {props.bookmarked.map((item) => {
        return <h6>{item.title}</h6>;
      })}
    </div>
  );
};

export default Dashboard;
