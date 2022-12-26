import { Fragment, useState, useRef, useEffect } from "react";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), content: "Añade algo", completed: false },
  ]);

  const todoTaskRef = useRef();

  useEffect(() => {
    const storageTodos = localStorage.getItem("todos");
    if (storageTodos) {
      setTodos(JSON.parse(storageTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    console.log(todo);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const content = todoTaskRef.current.value;
    if (content === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), content, completed: false }];
    });
  };

  const handleTodoRemove = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <div className="card">
        <div className="card-body p-5">
          <input className="form-control mb-2" ref={todoTaskRef} type="text" placeholder="Nueva Tarea" />
          <button className="btn btn-success me-2" onClick={handleTodoAdd}>Añadir tarea</button>
          <button className="btn btn-danger" onClick={handleTodoRemove}>Borrar completados</button>
          
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <div>
            Te quedan {todos.filter((todo) => !todo.completed).length} tareas
            por completar
          </div>
        </div>
      </div>
    </Fragment>
  );
}
