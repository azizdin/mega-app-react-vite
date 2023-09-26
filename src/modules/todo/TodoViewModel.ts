import { useState } from "react";

export function useTodoViewModel() {
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

  return {
    todos,
    task,
    handleInput,
    handleFormSubmit,
    handleChangeChecked,
    handleDelete,
  };
}
