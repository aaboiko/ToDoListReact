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
    <section className="create">
      <form onSubmit={onSubmit}>
        <input
          name="task-title"
          type="text"
          className="input-create"
          placeholder="What needs to be done?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit" className="button-add">+
        </button>
      </form>
    </section>
  );
}

export default Create;