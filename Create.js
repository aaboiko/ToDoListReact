import { useState } from 'react';

function Create(props) {
  const [title, setTitle] = useState("");

  function onSubmit (event) {
    event.preventDefault();

    if (!title) {
      alert("Please add a task description.");
      return;
    }

    props.addTodo(title);
    setTitle("");
  };

  return (
    <div >
      <form onSubmit={onSubmit} >
        <input
          name="task-title"
          type="text"
          className="input"
          placeholder="Add todo..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit" className="button-add">Add
        </button>
      </form>
    </div>
  );
}

export default Create;