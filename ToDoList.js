
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
        <section className="main">
            <ul className="todo-list">
                    {props.todos.filter(filterTodos).map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            markComplete={props.markComplete}
                            delTodo={props.delTodo}
                        />
                    ))}
                </ul>
        </section>
    );
}

export default ToDoList;