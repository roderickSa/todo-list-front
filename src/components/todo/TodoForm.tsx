import { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "../../hooks/useTodos";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { storeTodo } = useTodos();

  const handleStoreTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    storeTodo(title);

    setTitle("");
  };

  return (
    <li className="list-group-item">
      <form onSubmit={handleStoreTodo}>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="new todo"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </form>
    </li>
  );
};

export default TodoForm;
