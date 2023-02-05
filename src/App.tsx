import "./App.css";
import Todo from "./Todo";

function TodoContainer() {
  const todos = ["Make food", "Play OuterWilds"];
  return (
    <form className="todo-container">
      <h4 className="title">Cool Todo App</h4>
      <div className="form-group">
        <input placeholder="Add a todo item" />
        <button type="button">+</button>
      </div>
      <div className="todos">
        {todos.map((val) => (
          <Todo todo={val} />
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
