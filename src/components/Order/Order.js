import React from "react";

import classes from "./Order.module.css";

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientsOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        <strong>{ig.name}</strong>:<strong>{ig.amount}</strong>
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>ingredients are {ingredientsOutput}</p>
    </div>
  );
};

export default Order;
