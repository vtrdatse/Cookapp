import React from "react";
import { Link } from "react-router-dom";

const Platform = ({ foods }) => {
  console.log(foods);
  return (
    <div className="platform-container">
      <h3>Most popular recipe collections this week</h3>
      <div className="flex-plat">
        {foods &&
          foods.map((food) => (
            <div>
              <Link to={`/detail/${food.id}`}>
                <img src={food.image[0]} alt={food.id} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Platform;
