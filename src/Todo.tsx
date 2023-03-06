type TodoProps = {
  todo: string;
  onClick: React.ReactEventHandler;
};

function Todo({ todo, onClick }: TodoProps) {
  return (
    <div className="todo-item" onClick={onClick}>
      <p className="text">{todo}</p>
      <button type="button">x</button>
    </div>
  );
}

export default Todo;
