import { useState } from "react";
import "./App.css";
import Todo from "./Todo";

type TodoItem = { text: string; key: number };

function TodoContainer() {
  let [todos, setTodos] = useState<TodoItem[]>([]);
  let [item, setItem] = useState<string>("");
  return (
    <form className="todo-container">
      <h4 className="title">Cool Todo App</h4>
      <div className="form-group">
        <input placeholder="Add a todo item" id="todo_input" onChange={(e) => setItem(e.target.value)} />
        <button
          type="button"
          onClick={() => setTodos([...todos, { text: item, key: (todos.slice(-1)[0]?.key ?? 0) + 1 }])}
        >
          +
        </button>
      </div>
      <div className="todos">
        {todos.map((item) => (
          <Todo
            key={item.key}
            todo={item.text}
            onClick={() => setTodos(todos.filter((todo) => todo.key !== item.key))}
          />
        ))}
      </div>
      <div className="form-group">
        <p>You have {todos.length} pending tasks</p>
        <button type="button" id="clear" onClick={() => setTodos([])}>
          Clear All
        </button>
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
