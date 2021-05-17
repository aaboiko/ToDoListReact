
import TodoItem from "./ToDo";

function ToDoList(props) {
  

  return (
    <div className="div-list">
        {props.todos.length > 0 ? (
          <ul >
            {props.todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={props.markComplete}
                delTodo={props.delTodo}
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