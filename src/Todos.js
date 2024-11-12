import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className="collection-item "
          key={todo.id}
          onClick={() => deleteTodo(todo.id)}
          style={{ cursor: "pointer" }}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <div className="collection-item">
      <span className="center">you have no todos left!!!!!!!</span>
    </div>
  );
  return <div className="todos collection">{todoList}</div>;
};
export default Todos;
