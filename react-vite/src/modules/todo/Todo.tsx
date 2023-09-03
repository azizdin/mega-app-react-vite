import { useState } from "react";
import "./todo.css";

type Task = {
  id: number;
  task: string;
  isCompleted: boolean;
};

function Todo() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      task: task,
      isCompleted: false,
    };

    setTodos((prevTodos) => [newTask, ...prevTodos]);
    setTask("");
  };

  const handleChangeChecked = (todo: Task) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-full max-w-md m-auto">
        <div className="grid gap-4 bg-white shadow-md rounded px-5 pt-6 pb-6 mb-4">
          <form onSubmit={handleFormSubmit}>
            <div className="flex gap-3">
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
              <li key={todo.id}>
                <div className="flex gap-3 py-1">
                  <input
                    className="regularCheckbox"
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleChangeChecked(todo)}
                  />
                  <div className="w-full break-normal">{todo.task}</div>
                  <button
                    className="negativeBtn"
                    onClick={() => handleDelete(todo.id)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
