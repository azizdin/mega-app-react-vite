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
    <div className="  w-full max-w-md mx-auto">
      <div className=" grid gap-4 bg-white shadow-md rounded px-5 pt-6 pb-6 mb-4 ">
        <form className="" onSubmit={handleFormSubmit}>
          <div className=" flex gap-3 ">
            {" "}
            <input
              className="todoTextField"
              type="text"
              name="task"
              value={task}
              onChange={handleInput}
            />
            <button className="todoAddBtn max-w-min" type="submit">
              add
            </button>
          </div>
        </form>
        <ul>
          {todos.map((todo) => (
            <div className="">
              <li key={todo.id}>
                <div className=" flex gap-3 py-1">
                  <input
                    className="regularCheckbox"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleChangeChecked(todo)}
                  />
                  <div className=" w-full break-normal ">{todo.task}</div>
                  <button
                    className="negativeBtn max-w-m"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
