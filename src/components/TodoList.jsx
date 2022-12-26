import { TodoItem } from "./TodoItem";

export function TodoList({ todos,toggleTodo }) {
  return (
    <ul className="list-group mt-2 mb-2">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>;
      })}
    </ul>
  );
}
