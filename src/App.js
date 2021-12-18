
import './App.css';
import TodoList from "./components/TodoList";
import TodoDataProvider from "./hooks/TodoDataProvider";

export default function App() {
  return (
    <TodoDataProvider>
      {(data, onToggleComplete) => (
        <TodoList
          todoData={data}
          onToggleComplete={onToggleComplete}
        ></TodoList>
      )}
    </TodoDataProvider>
  );
}
