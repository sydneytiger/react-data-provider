import { useState, useEffect, useCallback } from "react";

const TodoDataProvider = ({ children }) => {
  const [todoData, setTodoData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filterByUser = useCallback(
    (todoList, userId) => todoList.filter((todo) => todo.userId === userId),
    []
  );

  const toggleComplete = useCallback(
    (todoId) => {
      const selectedTodo = todoData.filter((todo) => todo.id === todoId);
      if (selectedTodo.length > 0) {
        selectedTodo[0].completed = !selectedTodo[0].completed;
      }

      setTodoData([...todoData]);
    },
    [todoData]
  );

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setIsLoading(false);
          setTodoData(filterByUser(json, 1));
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [filterByUser]);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return children(todoData, toggleComplete);
};

export default TodoDataProvider;
