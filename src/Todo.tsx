function Todo({ todo, onClick }: { todo: string; onClick: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <div className="todo-item" onClick={onClick}>
      <p className="text">{todo}</p>
      <button type="button">x</button>
    </div>
  );
}

export default Todo;
