import React from "react";

const Dashboard = ({ dashData }) => {
  console.log("Inside Dashboard", dashData);
  let count = 0;
  return (
    <div className="dashboard">
      <h1>Spend time on read</h1>
      {count + dashData}
    </div>
  );
};

export default Dashboard;
