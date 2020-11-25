import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>JEBAĆ PIS</h1>
      <Link to={"/logout"}>logout</Link>
    </div>
  );
};

export default Dashboard;
