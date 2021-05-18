import { useState } from 'react';

function Create(props) {
  const [title, setTitle] = useState("");

  function onSubmit (event) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please add a task description.");
      return;
    }
    props.addTodo(title);
    setTitle("");
  };

  return (
    <section >
      <form onSubmit={onSubmit}>
        <input
          name="task-title"
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}

export default Create;