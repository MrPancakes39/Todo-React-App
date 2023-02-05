import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

function TodoContainer() {
  let [todos, setTodos] = useState<string[]>([]);
  return (
    <form className="todo-container">
      <h4 className="title">Cool Todo App</h4>
      <div className="form-group">
        <input placeholder="Add a todo item" id="todo_input" />
        <button type="button" onClick={() => setTodos([...todos, "todo item"])}>
          +
        </button>
      </div>
      <div className="todos">
        {todos.map((val, i) => (
          <Todo key={i} todo={val} />
        ))}
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <TodoContainer />
    </div>
  );
}

export default App;
