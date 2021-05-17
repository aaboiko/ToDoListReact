
import TodoItem from "./ToDo";

function ToDoList(props) {
  let filter = props.filter;
  let todos;
  if(filter === "all"){
     todos = props.todos;
  }
  if(filter === "done"){
     todos = props.todos.filter((todo) => todo.completed === true);
  }
  if(filter === "active"){
     todos = props.todos.filter((todo) => todo.completed === false);
  }

  return (
    <div className="div-list">
        {props.todos.length > 0 ? (
          <ul >
            {todos.map((todo) => (
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