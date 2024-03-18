import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodo = (props) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onReceive(newTodo);
    setNewTodo({ title: "", description: "" });
  };
  return (
    <div id="collect-data">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title :</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={newTodo.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <textarea
            required
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            value={newTodo.description}
          ></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
