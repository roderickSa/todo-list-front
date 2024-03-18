import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { TodoDetailItemType } from "../../types";

const TodoDetailItemFormUpdate = () => {
  const [localDescription, setLocalDescription] = useState("");

  const {
    todoActive,
    todoDetailItemActive,
    updateDescTodoDetailItem,
    setTodoDetailItemActive,
  } = useTodos();

  const { description } = todoDetailItemActive as TodoDetailItemType;

  useEffect(() => {
    setLocalDescription(description);
  }, [description]);

  const handleUpdateTodoDetailItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      todoActive?.id &&
      todoDetailItemActive?.id &&
      localDescription.trim().length > 0
    ) {
      updateDescTodoDetailItem(todoDetailItemActive?.id, localDescription);

      setLocalDescription("");

      setTodoDetailItemActive(undefined);
    }
  };

  const handleRemoveTodoDetailItemActive = () => {
    setTodoDetailItemActive(undefined);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <div className="" style={{ width: "80%" }}>
          <form onSubmit={handleUpdateTodoDetailItem}>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="update task"
              value={localDescription}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLocalDescription(event.target.value)
              }
            />
          </form>
        </div>
        <div style={{ width: "15%" }}>
          <button
            className="btn btn-warning"
            onClick={handleRemoveTodoDetailItemActive}
          >
            cancel
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoDetailItemFormUpdate;
