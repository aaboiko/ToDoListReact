

function Filter(props){
    return (
        <div className="filter">
            <button className="button-filter" onClick={props.onClickShowAll}>All</button>
            <button className="button-filter" onClick={props.onClickShowDone}>Done</button>
            <button className="button-filter" onClick={props.onClickShowActive}>Active</button>
        </div>
    )
}

export default Filter;