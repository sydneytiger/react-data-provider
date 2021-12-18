import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData, onToggleComplete }) => {
  return (
    <ul>
      {todoData.map((data) => {
        return (
          <li key={data.id}>
            <TodoItem todoData={data} onToggleComplete={onToggleComplete} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
