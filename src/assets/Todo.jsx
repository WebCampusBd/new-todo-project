import React from "react";

const Todo = ({ title, description }) => {
  return (
    <div id="todo">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Todo;
