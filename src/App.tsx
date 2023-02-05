import "./App.css";

function TodoContainer() {
  return (
    <form className="todo-container">
      <h4 className="title">Cool ToDo App</h4>
      <div className="form-group">
        <input placeholder="Add a todo item" />
        <button type="button">+</button>
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
