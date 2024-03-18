import { useEffect } from "react";
import { useTodos } from "../../hooks/useTodos";
import TodoDetailItem from "./TodoDetailItem";
import TodoDetailItemForm from "./TodoDetailItemForm";
import TodoDetailItemFormUpdate from "./TodoDetailItemFormUpdate";

const TodoDetailList = () => {
  const {
    todoDetail,
    todoActive,
    todoDetailItemActive,
    loadingTodoDetail,
    getTodoDetail,
  } = useTodos();

  useEffect(() => {
    if (todoActive) {
      getTodoDetail(todoActive.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoActive]);

  if (loadingTodoDetail) {
    return <h3>Cargando Items...</h3>;
  }

  return (
    <ul className="list-group list-group-flush">
      {todoDetail.map((todoDetailItem) => (
        <TodoDetailItem
          key={todoDetailItem.id}
          todoDetailItem={todoDetailItem}
        />
      ))}
      {todoDetailItemActive ? (
        <TodoDetailItemFormUpdate />
      ) : (
        <TodoDetailItemForm />
      )}
    </ul>
  );
};

export default TodoDetailList;
