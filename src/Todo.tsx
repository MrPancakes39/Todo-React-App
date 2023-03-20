type TodoProps = {
  todo: string;
  remove: React.ReactEventHandler;
};

function Todo({ todo, remove }: TodoProps) {
  return (
    <div className="todo-item">
      <p className="text">{todo}</p>
      <button type="button" onClick={remove}>
        x
      </button>
    </div>
  );
}

export default Todo;
