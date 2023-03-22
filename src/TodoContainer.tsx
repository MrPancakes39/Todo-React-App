import { useRef, useState } from "react";
import Todo from "./Todo";

type TodoItem = {
  text: string;
  key: number;
};

function TodoContainer() {
  let [todos, setTodos] = useState<TodoItem[]>([]);
  let inputRef = useRef<HTMLInputElement>(null);

  function addToList() {
    const item = inputRef.current!.value;
    if (item === "") alert("Can't add empty item.");
    else {
      setTodos([...todos, { text: item, key: (todos.at(-1)?.key ?? 0) + 1 }]);
      inputRef.current!.value = "";
    }
  }

  function removeTodoItem(item: TodoItem) {
    setTodos(todos.filter((todo) => todo.key !== item.key));
  }

  return (
    <form
      className="todo-container"
      onSubmit={(e) => {
        e.preventDefault();
        addToList();
      }}
    >
      <h4 className="title">Cool Todo App</h4>
      <div className="form-group">
        <input placeholder="Add a todo item" id="todo_input" ref={inputRef} />
        <button type="button" onClick={addToList}>
          +
        </button>
      </div>
      <div className="todos">
        {todos.map((item) => (
          <Todo key={item.key} todo={item.text} remove={() => removeTodoItem(item)} />
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

export default TodoContainer;
