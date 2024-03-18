import { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "../../hooks/useTodos";

const TodoDetailItemForm = () => {
  const [description, setDescription] = useState("");

  const { todoActive, storeTodoDetailItem } = useTodos();

  const handleStoreTodoDetailItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoActive?.id && description.trim().length > 0) {
      storeTodoDetailItem(todoActive.id, description);

      setDescription("");
    }
  };

  return (
    <li className="list-group-item">
      <form onSubmit={handleStoreTodoDetailItem}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="new task"
          value={description}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDescription(event.target.value)
          }
        />
      </form>
    </li>
  );
};

export default TodoDetailItemForm;
