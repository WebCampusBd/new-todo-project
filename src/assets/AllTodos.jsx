import React, { useState } from "react";

import Todo from "./Todo";

const AllTodos = ({ todos }) => {
  return (
    <div id="todos">
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </div>
  );
};

export default AllTodos;
