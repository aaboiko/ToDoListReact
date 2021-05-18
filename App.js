
import './index.css';
import React from 'react';
import Create from './Create';
import Filter from './Filter';
import ToDoList from './ToDoList';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (title) => {
    let newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    console.log(newTodo.id);
    setTodos([...todos, newTodo]);
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  };

  const showAll = () => {
    setFilter("all");
  }

  const showDone = () => {
    setFilter("done");
  }

  const showActive = () => {
    setFilter("active");
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <Create addTodo={addTodo} />
      </header>
      <ToDoList todos={todos} delTodo={delTodo} markComplete={markComplete} filter={filter} />
      <footer className="footer">
        <Filter showAll={showAll} showDone={showDone} showActive={showActive} deleteCompleted={deleteCompleted}/>
      </footer>
    </section>
  );
}

export default App;
