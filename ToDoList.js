import ToDo from './ToDo';

function ToDoList(props){
    let  items = props.items.map((item, index) => {
        return (
            <ToDo item={item} index={index} removeItem={props.removeItem}/>
        )
    })
    
    return (
        <ul id="todolist">{items}</ul>
    )
}

export default ToDoList;