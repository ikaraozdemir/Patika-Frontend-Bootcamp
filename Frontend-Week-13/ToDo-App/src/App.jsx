import { useState } from "react";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      text: "Taste JavaScript",
      done: true,
    },
    {
      text: "Code furiously",
      done: true,
    },
    {
      text: "Promote Mavo",
      done: false,
    },
    {
      text: "Give talks",
      done: false,
    },
    {
      text: "Write tutorials",
      done: true,
    },
    {
      text: "Have a life!",
      done: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTodoList((prev) => [...prev, { text: newTask, done: false }]);
    setNewTask("");
  };

  const handleClick = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodoList(updatedTodos);
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={handleAddTask}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTask}
              onChange={handleChange}
            />
          </form>
        </header>

        <section className="main">

          <ul className="todo-list">
            {todoList.map((task, index) => (
              <li key={index} className={task.done ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    name={task.text}
                    checked={task.done}
                    onChange={() => handleClick(index)}
                  />
                  <label
                    onClick={() => handleClick(index)}
                    className={task.done ? "completed" : ""}
                  >
                    {task.text}
                  </label>
                  <button className="destroy"></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">

          <span className="todo-count">
            <strong>{todoList.filter((todo) => !todo.done).length}</strong>{" "}
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}
export default App;
