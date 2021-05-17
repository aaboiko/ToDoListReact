
import TodoItem from "./ToDo";

function ToDoList(props) {
    const filter = props.filter;

    function filterTodos(todo) {
        switch (filter){
          case "done": return todo.completed;
          case "active": return !todo.completed;
          default: return true;
        }
        
    }

    return (
        <div >
            {props.todos.length > 0 ? (
                <ul className="div-list">
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