import './index.css';
import React from 'react';
import Create from './Create';
import Filter from './Filter';
import ToDoList from './ToDoList';
import { useState } from 'react';

function App(props) {
  const [todoItems, setItems] = useState([{index: 1, value: "learn react", done: false}]);

  function addToDo(item) {
    let setItemsConcated = todoItems.concat({
      index: todoItems.length + 1,
      value: item,
      done: false
    })
    setItems(setItemsConcated);
  }
  function removeItem(index) {
    let setItemsSpliced = todoItems.splice(index, 1);
    setItems(setItemsSpliced);
    
  }

  return (
    <div className="container">
      <Create onClickAdd={addToDo} />
      <Filter />
      <ToDoList items={todoItems} removeItem={removeItem} />
    </div>
  );
}

export default App;
