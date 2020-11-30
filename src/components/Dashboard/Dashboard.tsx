import React from "react";
import DishList from "../DishList/DishList";

const Dashboard = () => {
  const dishes = [
    {
      id: 1,
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 100,
    },
  ];
  return (
    <div>
      <h1>Lista dań</h1>
      <DishList dishes={dishes}></DishList>
    </div>
  );
};

export default Dashboard;
