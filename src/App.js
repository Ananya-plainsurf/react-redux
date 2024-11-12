import { useState } from "react";
import "./App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import ListComp from "./ListComp";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "helllo ananya" },
    { id: 2, content: "do you need some makeup" },
    { id: 3, content: "we have a packages of 6k to 15k" },
  ]);

  const deleteTodo = (id) => {
    return setTodos(todos.filter((item) => item.id !== id));
  };

  const onSubmit = (data) => {
    setTodos((prev) => [...prev, { ...data }]);
  };

  return (
    <div className="todo-App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} onSubmit={onSubmit} />
      <AddTodo onSubmit={onSubmit} />
      <ListComp />
    </div>
  );
}

export default App;
