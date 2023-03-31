import React from "react";

const Dashboard = (props) => {
  const { dashData } = props.dashData;
  const [bookmarked] = props.bookmarked;

  console.log("inside dashboard bookmark ", bookmarked);

  //let count = 0;
  return (
    <div className="dashboard">
      {" "}
      <h3>Spend time on read: {dashData}</h3>
    </div>
  );
};

export default Dashboard;
