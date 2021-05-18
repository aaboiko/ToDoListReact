
function ToDo(props) {
    let textDecorationClass = props.todo.completed
        ? "completed"
        : "not-completed";

    return (
        <li className="todo">
            <input name="completed-checkbox" className="toggle"
                type="checkbox"
                checked={props.todo.completed}
                value={props.todo.completed}
                onChange={() => props.markComplete(props.todo.id)}></input>
            <label className={textDecorationClass}>{props.todo.title}</label>
            <button onClick={() => props.delTodo(props.todo.id)} className="destroy"></button>
        </li>
    )
}

export default ToDo;

