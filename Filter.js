function Buttons(props) {
    return (
        <li>
            <button className="button-filter" onClick={props.showAll}>All</button>
            <button className="button-filter" onClick={props.showDone}>Done</button>
            <button className="button-filter" onClick={props.showActive}>Active</button>
        </li>
    )
}

function Filter(props) {
    const active = props.todos.filter((todo) => !todo.completed).length;

    return (
        <ul className="filters">
            <li><span className="todo-count"><strong>{active}</strong> items left</span></li>
            <Buttons showAll={props.showAll} showDone={props.showDone} showActive={props.showActive}/>
            <li><button className="button-delete-completed" onClick={props.deleteCompleted}>Delete completed</button></li>
        </ul>
    )
}

export default Filter;