
import TodoItem from "./ToDo";

function ToDoList(props) {
    const filter = props.filter;

    function filterTodos(todo) {
        switch (filter){
          case "done": return todo.completed ? true : false;
          case "active": return todo.completed ? false : true;
          default: return true;
        }
        
    }

    return (
        <div className="div-list">
            {props.todos.length > 0 ? (
                <ul >
                    {props.todos.filter(filterTodos).map((todo) => (
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