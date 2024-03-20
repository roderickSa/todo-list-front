import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { INITIAL_STATE } from "./INITIAL_STATE";
import AppContext from "./TodoContext";
import {
  HttpErrorResponse,
  HttpTodoDetailItemUpdateResponse,
  HttpTodoDetailResponse,
  HttpTodoUpdateResponse,
  HttpTodosResponse,
  Props,
  TodoDetailItemType,
  TodoType,
} from "../types";
import { ActionType } from "../types/actionTypes";
import { client } from "../axios/client";
import { getFromLocalstorage, removeKeyOfLocalstorage } from "../utils";
import { useNavigate } from "react-router-dom";

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);
  const navigate = useNavigate();

  const getTodos = async () => {
    dispatch({
      type: ActionType.SEND_GET_TODOS,
      payload: { todos: [], loadingTodos: true },
    });
    try {
      const access_token = getFromLocalstorage("access_token");

      const response = await client.get<HttpTodosResponse>("/api/task", {
        headers: {
          Authorization: "bearer " + access_token,
        },
      });

      dispatch({
        type: ActionType.RECEIVED_GET_TODOS,
        payload: { todos: response.data.data, loadingTodos: false },
      });
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_GET_TODOS,
        payload: { todos: [], loadingTodos: false },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const storeTodo = async (title: string) => {
    dispatch({
      type: ActionType.SEND_STORE_TODO,
      payload: { todo: undefined },
    });
    try {
      const access_token = getFromLocalstorage("access_token");
      const body = { title };

      const response = await client.post<HttpTodoUpdateResponse>(
        "/api/task",
        body,
        {
          headers: {
            Authorization: "bearer " + access_token,
          },
        }
      );

      dispatch({
        type: ActionType.RECEIVED_STORE_TODO,
        payload: { todo: response.data.data },
      });
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_STORE_TODO,
        payload: { todo: undefined },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const updateTodo = async (todo_id: number, title: string) => {
    dispatch({
      type: ActionType.SEND_UPDATE_TODO,
      payload: { todo: undefined },
    });
    try {
      const access_token = getFromLocalstorage("access_token");
      const body = { title };

      const response = await client.patch<HttpTodoUpdateResponse>(
        "/api/task/" + todo_id,
        body,
        {
          headers: {
            Authorization: "bearer " + access_token,
          },
        }
      );

      dispatch({
        type: ActionType.RECEIVED_UPDATE_TODO,
        payload: { todo: response.data.data },
      });

      setTodoActive(undefined);
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_UPDATE_TODO,
        payload: { todo: undefined },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const deleteTodo = async (todo_id: number) => {
    dispatch({
      type: ActionType.SEND_DELETE_TODO,
      payload: { todo_id: undefined },
    });
    try {
      const access_token = getFromLocalstorage("access_token");

      await client.delete("/api/task/" + todo_id, {
        headers: {
          Authorization: "bearer " + access_token,
        },
        transformResponse: [(data) => data],
      });

      dispatch({
        type: ActionType.RECEIVED_DELETE_TODO,
        payload: { todo_id },
      });

      setTodoActive(undefined);
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_DELETE_TODO,
        payload: { todo_id: undefined },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const getTodoDetail = async (todo_id: number) => {
    dispatch({
      type: ActionType.SEND_GET_TODODETAIL,
      payload: { todoDetail: [], loadingTodoDetail: true },
    });
    try {
      const access_token = getFromLocalstorage("access_token");

      const response = await client.get<HttpTodoDetailResponse>(
        "/api/item_task?task_id=" + todo_id,
        {
          headers: {
            Authorization: "bearer " + access_token,
          },
        }
      );

      dispatch({
        type: ActionType.RECEIVED_GET_TODODETAIL,
        payload: { todoDetail: response.data.data, loadingTodoDetail: false },
      });
      setTodoDetailItemActive(undefined);
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_GET_TODODETAIL,
        payload: { todoDetail: [], loadingTodoDetail: false },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const updateDoneTodoDetailItem = async (
    todoDetailItemId: number,
    done: number
  ) => {
    dispatch({
      type: ActionType.SEND_UPDATE_DONE_TODODETAILITEM,
      payload: { todoDetailItem: undefined },
    });
    try {
      const access_token = getFromLocalstorage("access_token");
      const body = { done };

      const response = await client.patch<HttpTodoDetailItemUpdateResponse>(
        "/api/item_task/" + todoDetailItemId,
        body,
        {
          headers: {
            Authorization: "bearer " + access_token,
          },
        }
      );

      dispatch({
        type: ActionType.RECEIVED_UPDATE_DONE_TODODETAILITEM,
        payload: { todoDetailItem: response.data.data },
      });
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_UPDATE_DONE_TODODETAILITEM,
        payload: { todoDetailItem: undefined },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const storeTodoDetailItem = async (todo_Id: number, description: string) => {
    dispatch({
      type: ActionType.SEND_STORE_TODODETAILITEM,
      payload: { todoDetailItem: undefined },
    });
    try {
      const access_token = getFromLocalstorage("access_token");
      const body = { task_id: todo_Id, description };

      const response = await client.post<HttpTodoDetailItemUpdateResponse>(
        "/api/item_task",
        body,
        {
          headers: {
            Authorization: "bearer " + access_token,
          },
        }
      );

      dispatch({
        type: ActionType.RECEIVED_STORE_TODODETAILITEM,
        payload: { todoDetailItem: response.data.data },
      });
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_STORE_TODODETAILITEM,
        payload: { todoDetailItem: undefined },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const updateDescTodoDetailItem = async (
    todoDetailItemId: number,
    desc: string
  ) => {
    dispatch({
      type: ActionType.SEND_UPDATE_DESC_TODODETAILITEM,
      payload: { todoDetailItem: undefined },
    });
    try {
      const access_token = getFromLocalstorage("access_token");
      const body = { description: desc };

      const response = await client.patch<HttpTodoDetailItemUpdateResponse>(
        "/api/item_task/" + todoDetailItemId,
        body,
        {
          headers: {
            Authorization: "bearer " + access_token,
          },
        }
      );

      dispatch({
        type: ActionType.RECEIVED_UPDATE_DESC_TODODETAILITEM,
        payload: { todoDetailItem: response.data.data },
      });
    } catch (error) {
      dispatch({
        type: ActionType.FAIL_UPDATE_DESC_TODODETAILITEM,
        payload: { todoDetailItem: undefined },
      });

      if ((error as HttpErrorResponse).response.status === 401) {
        removeKeyOfLocalstorage("access_token");

        navigate("/login");
      }
    }
  };

  const setTodoActive = (todo: TodoType | undefined) => {
    dispatch({
      type: ActionType.SET_ACTIVE_TODO,
      payload: { todoActive: todo },
    });
  };

  const setTodoDetailItemActive = (
    todoDetailItem: TodoDetailItemType | undefined
  ) => {
    dispatch({
      type: ActionType.SET_ACTIVE_TODODETAILITEM,
      payload: { todoDetailItemActive: todoDetailItem },
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        getTodos,
        getTodoDetail,
        updateTodo,
        updateDoneTodoDetailItem,
        updateDescTodoDetailItem,
        storeTodo,
        deleteTodo,
        storeTodoDetailItem,
        setTodoActive,
        setTodoDetailItemActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
