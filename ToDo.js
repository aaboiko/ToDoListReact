

function ToDo(props){
    function deleteItem(){
       let index  = parseInt(props.index);
       props.removeItem(index);
    }
    function toggle(){
       
    }
    
    return (
        <div className="todo">
            <h3>{props.item.value}</h3>
            <button onClick={deleteItem}>Delete</button>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

export default ToDo;