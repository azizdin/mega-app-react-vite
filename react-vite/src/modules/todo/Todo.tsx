import { useState } from "react";
import "./todo.css";
type Todo = {
  id: number;
  task: string;
  isCompleted: boolean;
};

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // check if the value is empty
    if (task.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }

    // create a new todo
    const todo: Todo = {
      id: Date.now(),
      task: task,
      isCompleted: false,
    };

    // add todo to the state
    setTodos([todo, ...todos]);

    // clear the value of task
    setTask("");
  };

  const handleChangeChecked = (todo: Todo) => {
    // index of the todo
    const index = todos.indexOf(todo);

    // change todo completed status
    todo.isCompleted = !todo.isCompleted;

    // then we need to replace it with one in todos
    todos.splice(index, 1, todo);

    // update the state
    setTodos([...todos]);
  };

  const handleDelete = (id: number) => {
    // find index of todo from id
    const index = todos.findIndex((todo) => todo.id === id);

    // remove todo
    todos.splice(index, 1);

    // update the state
    setTodos([...todos]);
  };

  return (
    <div className=" ">
      <div className=" w-full max-w-xs">
        <form
          className="grid gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleFormSubmit}
        >
          <input
            className="todoTextField"
            type="text"
            name="task"
            value={task}
            onChange={handleInput}
          />
          <button className="todoBtn" type="submit">
            Submit
          </button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <input
                className="regularCheckbox"
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleChangeChecked(todo)}
              />
              <button
                className="negativeBtn"
                onClick={() => handleDelete(todo.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
