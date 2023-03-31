import React from "react";

const Dashboard = (props) => {
  //const { dashData } = props.dashData;
  //  const [bookmarked] = props.bookmarked;

  console.log("inside dashboard bookmark ", props);

  //let count = 0;
  return (
    <div className="dashboard">
      {props.bookmarked.length}

      <h3>Spend time on read: {props.dashData}</h3>

      {props.bookmarked.map((item) => {
        return item.title;
      })}
    </div>
  );
};

export default Dashboard;
