

function ToDo(props){
    let textDecorationClass = props.todo.completed
    ? "completed"
    : "not-completed";
    
    return (
        <li className="create">
            <input name="completed-checkbox" type="checkbox" checked={props.todo.completed} value={props.todo.completed}
            onChange={() => props.markComplete(props.todo.id)}></input>
            <h3 className={textDecorationClass}>{props.todo.title}</h3>
            <button onClick={() => props.delTodo(props.todo.id)} className="button-delete">X</button>
        </li>
    )
}

export default ToDo;