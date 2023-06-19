import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Ingredient = () => {
  //
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://cookappapisu23.azurewebsites.net/api/Ingredients"
      );
      setIngredient(data);
    };
    getData();
  }, []);

  return (
    <div style={{ background: " #c9bdad", padding: "30px 10%" }}>
      <h3 style={{ textAlign: "center" }}>INGREDIENT</h3>
      <div className="flex-inger">
        {ingredient.length === 0 ? (
          <p>load...</p>
        ) : (
          ingredient.map((i, index) => <span key={index}>{i.name}</span>)
        )}
      </div>
    </div>
  );
};

export default Ingredient;
