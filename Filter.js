

function Filter(props) {
    return (
        <div className="filter">
            <button className="button-filter" onClick={props.showAll}>All</button>
            <button className="button-filter" onClick={props.showDone}>Done</button>
            <button className="button-filter" onClick={props.showActive}>Active</button>
            <button className="button-delete-completed" onClick={props.deleteCompleted}>Delete completed</button>
        </div>
    )
}

export default Filter;