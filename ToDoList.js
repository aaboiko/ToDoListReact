import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./ToDo";

function TodosList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    let newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="div-list">
        {todos.length > 0 ? (
          <ul >
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={markComplete}
                delTodo={delTodo}
              />
            ))}
          </ul>
        ) : (
          <p> There is no todos now</p>
        )}
      </div>
  );
}

export default ToDoList;