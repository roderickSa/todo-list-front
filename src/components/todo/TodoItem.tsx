import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { TodoProp } from "../../types";

const TodoItem = ({ todo }: TodoProp) => {
  const { setTodoActive, todoActive, todoDetail, deleteTodo } = useTodos();
  const [visibleDoneButton, setVisibleDoneButton] = useState(false);

  useEffect(() => {
    handleMakeButtonOnWhenTasksAreDone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoDetail]);

  const handleGetTodoDetail = () => {
    setTodoActive(todo);
  };

  const handleMakeButtonOnWhenTasksAreDone = () => {
    if (todoDetail.length === 0) {
      return setVisibleDoneButton(false);
    }

    const todoDetailItemsDone = todoDetail.filter(
      (todoDetailItem) =>
        todo.id === todoDetailItem.task_id && todoDetailItem.done === 1
    );

    if (todoDetailItemsDone.length !== todoDetail.length) {
      return setVisibleDoneButton(false);
    }

    setVisibleDoneButton(true);
  };

  const handleDeleteTodo = () => {
    if (!confirm("Confirme para remover este TODO")) {
      return;
    }

    deleteTodo(todo.id);
  };

  return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-0">
      <div
        onClick={handleGetTodoDetail}
        className="h-100"
        style={{ padding: ".8rem", width: "90%" }}
      >
        {todo.title}
      </div>
      {todoActive && (
        <button
          className={`btn btn-danger ${!visibleDoneButton ? "d-none" : ""}`}
          onClick={handleDeleteTodo}
          style={{ width: "10%" }}
        >
          done
        </button>
      )}
    </li>
  );
};

export default TodoItem;
