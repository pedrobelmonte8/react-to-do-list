
export function TodoItem({ todo, toggleTodo }) {
  const { id, content, completed } = todo;
  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <li className="list-group-item">
      <input type="checkbox" className="form-check-input me-2" onChange={handleTodoClick} checked={completed} />
      {content}
    </li>
  );
}
