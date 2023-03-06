type TodoProps = {
  todo: string;
  onClick: React.ReactEventHandler;
};

function Todo({ todo, onClick }: TodoProps) {
  return (
    <div className="todo-item">
      <p className="text">{todo}</p>
      <button type="button" onClick={onClick}>
        x
      </button>
    </div>
  );
}

export default Todo;
