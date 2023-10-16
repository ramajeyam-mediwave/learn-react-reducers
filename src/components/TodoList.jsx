const TodoList = ({ todos, handleDelete }) => {
  return (
    <div>
      <h1>My todos</h1>
      {todos.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
