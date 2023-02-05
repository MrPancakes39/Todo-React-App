import "./App.css";

function TodoContainer() {
  return (
    <form className="todo-container">
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
