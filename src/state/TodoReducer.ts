import { TodoStateType, TodoActionType } from "../types";
import { ActionType } from "../types/actionTypes";

export const TodoReducer = (
  state: TodoStateType,
  action: TodoActionType
): TodoStateType => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SEND_GET_TODOS:
    case ActionType.RECEIVED_GET_TODOS:
    case ActionType.FAIL_GET_TODOS:
      return {
        ...state,
        todos: payload.todos,
        loadingTodos: payload.loadingTodos,
      };
    case ActionType.SEND_GET_TODODETAIL:
    case ActionType.RECEIVED_GET_TODODETAIL:
    case ActionType.FAIL_GET_TODODETAIL:
      return {
        ...state,
        todoDetail: payload.todoDetail,
        loadingTodoDetail: payload.loadingTodoDetail,
      };

    case ActionType.SEND_UPDATE_TODO:
    case ActionType.RECEIVED_UPDATE_TODO:
    case ActionType.FAIL_UPDATE_TODO:
      if (!payload.todo) {
        return state;
      }

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.todo?.id ? payload.todo : todo
        ),
      };

    case ActionType.SEND_UPDATE_DONE_TODODETAILITEM:
    case ActionType.RECEIVED_UPDATE_DONE_TODODETAILITEM:
    case ActionType.FAIL_UPDATE_DONE_TODODETAILITEM:
    case ActionType.SEND_UPDATE_DESC_TODODETAILITEM:
    case ActionType.RECEIVED_UPDATE_DESC_TODODETAILITEM:
    case ActionType.FAIL_UPDATE_DESC_TODODETAILITEM:
      if (!payload.todoDetailItem) {
        return state;
      }

      return {
        ...state,
        todoDetail: state.todoDetail.map((todoDetailItem) =>
          todoDetailItem.id === payload.todoDetailItem?.id
            ? payload.todoDetailItem
            : todoDetailItem
        ),
      };
    case ActionType.SEND_STORE_TODO:
    case ActionType.RECEIVED_STORE_TODO:
    case ActionType.FAIL_STORE_TODO:
      if (!payload.todo) {
        return state;
      }

      return {
        ...state,
        todos: [...state.todos, payload.todo],
      };
    case ActionType.SEND_STORE_TODODETAILITEM:
    case ActionType.RECEIVED_STORE_TODODETAILITEM:
    case ActionType.FAIL_STORE_TODODETAILITEM:
      if (!payload.todoDetailItem) {
        return state;
      }

      return {
        ...state,
        todoDetail: [...state.todoDetail, payload.todoDetailItem],
      };
    case ActionType.SEND_DELETE_TODO:
    case ActionType.RECEIVED_DELETE_TODO:
    case ActionType.FAIL_DELETE_TODO:
      if (!payload.todo_id) {
        return state;
      }

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.todo_id),
      };
    case ActionType.SET_ACTIVE_TODO:
      return {
        ...state,
        todoActive: payload.todoActive,
      };
    case ActionType.SET_ACTIVE_TODODETAILITEM:
      return {
        ...state,
        todoDetailItemActive: payload.todoDetailItemActive,
      };
    default:
      return state;
  }
};
