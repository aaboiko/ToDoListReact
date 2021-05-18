
function ToDo(props) {
    let textDecorationClass = props.todo.completed
        ? "completed"
        : "not-completed";

    return (
        <li className="todo">
            <section>
            <input name="completed-checkbox" className="checkbox"
                    type="checkbox"
                    checked={props.todo.completed}
                    value={props.todo.completed}
                    onChange={() => props.markComplete(props.todo.id)}></input>
                <p className={textDecorationClass}>{props.todo.title}</p>
            </section>
        </li>
    )
}

export default ToDo;

