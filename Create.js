import { useState } from 'react';

function Create(props){
    
    function addItem(){
        let input = document.querySelector('input').value;
        props.addToDo(input);
    }
    
    return (
        <div className="create">
            <input className="input" placeholder="Add todo"></input>
            <button className="button-add" onClick={addItem}>Add</button>
        </div>
    )
}

export default Create;