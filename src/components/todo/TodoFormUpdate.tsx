import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { TodoType } from "../../types";

const TodoFormUpdate = () => {
  const [localTitle, setLocalTitle] = useState("");
  const { todoActive, updateTodo, setTodoActive } = useTodos();
  const { title } = todoActive as TodoType;

  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  const handleUpdateTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoActive?.id && localTitle.trim().length > 0) {
      updateTodo(todoActive.id, localTitle);
    }

    setLocalTitle("");
  };

  const handleRemoveTodoActive = () => {
    setTodoActive(undefined);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="" style={{ width: "80%" }}>
          <form onSubmit={handleUpdateTodo}>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="update todo"
              value={localTitle}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLocalTitle(event.target.value)
              }
            />
          </form>
        </div>
        <div style={{ width: "15%" }}>
          <button className="btn btn-warning" onClick={handleRemoveTodoActive}>
            cancel
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoFormUpdate;
