import React, { useState } from "react";

import "./App.css";
import NewTodo from "./assets/NewTodo";
import AllTodos from "./assets/AllTodos";
import { dummyData } from "./assets/data";

const App = () => {
  const [todos, setTodos] = useState(dummyData);
  const receiveTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div id="main">
      <h2>Collect Data from a Form</h2>
      <NewTodo onReceive={receiveTodo} />
      <AllTodos todos={todos} />
    </div>
  );
};

export default App;
