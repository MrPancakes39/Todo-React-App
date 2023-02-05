function Todo({ todo }: { todo: string }) {
  return (
    <div className="todo-item">
      <p className="text">{todo}</p>
      <button type="button">x</button>
    </div>
  );
}

export default Todo;
