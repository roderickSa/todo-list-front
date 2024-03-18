import { useRef } from "react";
import { TodoDetailItemType } from "../../types";
import { useTodos } from "../../hooks/useTodos";

interface Props {
  todoDetailItem: TodoDetailItemType;
}

const TodoDetailItem = ({ todoDetailItem }: Props) => {
  const { description, done } = todoDetailItem;
  const { updateDoneTodoDetailItem, setTodoDetailItemActive } = useTodos();

  const itemReference = useRef<HTMLLIElement>(null);

  const handleFocusEvent = () => {
    if (itemReference.current?.classList.contains("todo-detail-item-focus")) {
      itemReference.current?.classList.remove("todo-detail-item-focus");
    } else {
      itemReference.current?.classList.add("todo-detail-item-focus");
    }
  };

  const handleUpdateDoneTodoDetailItem = () => {
    const doneState = done === 1 ? 0 : 1;
    updateDoneTodoDetailItem(todoDetailItem.id, doneState);
  };

  const handleTodoDetailItemActive = () => {
    setTodoDetailItemActive(todoDetailItem);
  };

  return (
    <li
      ref={itemReference}
      onMouseEnter={handleFocusEvent}
      onMouseLeave={handleFocusEvent}
      className={`list-group-item d-flex justify-content-between align-items-center p-0 ${
        done ? "todo-done" : ""
      }`}
      role="button"
    >
      <div
        className="h-100"
        style={{ padding: ".8rem", width: "90%" }}
        onClick={handleUpdateDoneTodoDetailItem}
      >
        {description}
      </div>
      <button
        className={`btn btn-primary ${done ? "d-none" : ""}`}
        style={{ width: "10%" }}
        onClick={handleTodoDetailItemActive}
      >
        edit
      </button>
    </li>
  );
};

export default TodoDetailItem;
