import { useContext } from "react";
import AppContext from "../state/TodoContext";

export const useTodos = () => {
  const {
    state,
    getTodos,
    getTodoDetail,
    setTodoActive,
    setTodoDetailItemActive,
    updateTodo,
    updateDoneTodoDetailItem,
    updateDescTodoDetailItem,
    storeTodo,
    deleteTodo,
    storeTodoDetailItem,
  } = useContext(AppContext);

  return {
    ...state,
    getTodos,
    getTodoDetail,
    updateTodo,
    updateDoneTodoDetailItem,
    updateDescTodoDetailItem,
    storeTodo,
    storeTodoDetailItem,
    setTodoActive,
    deleteTodo,
    setTodoDetailItemActive,
  };
};
