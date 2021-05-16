import { useState } from 'react';

function Create(props) {
  const [title, setTitle] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();

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
          placeholder="Add task..."
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <button
          type="submit">
        </button>
      </form>
    </div>
  );
}

export default Create;