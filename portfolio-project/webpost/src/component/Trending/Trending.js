import React from "react";
import Card from "./Card";

const Trending = () => {
  return (
    <div className="flex-col bg-secondary">
      <h2> Trending Today</h2>
      <div className="flex justify-around">
        <Card/>
      </div>
    </div>
  );
};

export default Trending;
