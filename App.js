import './index.css';
import React from 'react';
import Create from './Create';
import Filter from './Filter';
import ToDoList from './ToDoList';
import { useState } from 'react';

function App(props) {

  return (
    <div className="container">
      <Create onClickAdd={addToDo} />
      <Filter />
      <ToDoList items={todoItems} removeItem={removeItem} />
    </div>
  );
}

export default App;
