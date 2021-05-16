

function ToDo(props){
    let textDecorationClass = props.todo.completed
    ? "completed"
    : "not-completed";
    
    return (
        <li className={textDecorationClass}>
            <input name="completed-checkbox" type="checkbox" checked={props.todo.completed} value={props.todo.completed}
            onChange={() => props.markComplete(props.todo.id)}></input>
            <span >{props.todo.title}</span>
            <button onCLick={() => props.delTodo(props.todo.id)} className="button-filter"></button>
        </li>
    )
}

export default ToDo;