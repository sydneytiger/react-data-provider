import React from "react";

const TodoItem = ({ todoData, onToggleComplete }) => {
  const { id, title, completed } = todoData;

  return (
    <>
      <input
        type="checkbox"
        id={id}
        name="todo-item"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <label
        htmlFor="todo-item"
        className={completed ? "todo-completed" : "todo-pending"}
      >
        {title}
      </label>
    </>
  );
};

export default TodoItem;
