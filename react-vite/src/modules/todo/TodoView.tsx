import { Assets } from "@/assets/Assets";
import { useTodoViewModel } from "./TodoViewModel"; // Import your ViewModel
import "./todo.css";
function TodoView() {
  const {
    todos,
    task,
    handleInput,
    handleFormSubmit,
    handleChangeChecked,
    handleDelete,
  } = useTodoViewModel(); // Call the ViewModel function

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
                    <Assets.IconSVG.XMark />
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

export default TodoView;
