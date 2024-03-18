import { ActionType } from "./actionTypes";

interface HttpLoginResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

interface HttpTodosResponse {
  data: TodoType[];
}

interface HttpTodoDetailResponse {
  data: TodoDetailItemType[];
}

interface HttpTodoUpdateResponse {
  data: TodoType;
}

interface HttpTodoDetailItemUpdateResponse {
  data: TodoDetailItemType;
}

interface HttpErrorResponse {
  response: {
    data: ErrorResponse;
  };
}

interface ErrorResponse {
  error: string;
}

type TodoType = {
  id: number;
  user_name: string;
  title: string;
  created_at: string;
  uddated_at: string;
};

type TodoDetailItemType = {
  id: number;
  task_id: number;
  description: string;
  done: number;
  created_at: string;
  uddated_at: string;
};

interface TodosProp {
  todos: TodoType[];
}

interface TodoProp {
  todo: TodoType;
}

type TodoStateType = {
  todos: TodoType[];
  loadingTodos: boolean;
  todoDetail: TodoDetailItemType[];
  loadingTodoDetail: boolean;
  todoActive: undefined | TodoType;
  updatingTodo: boolean;
  todoDetailItemActive: undefined | TodoDetailItemType;
  updatingTodoDetailItem: boolean;
};

type TodoActionType =
  | {
      type: ActionType.SEND_GET_TODOS;
      payload: { todos: TodoType[]; loadingTodos: boolean };
    }
  | {
      type: ActionType.RECEIVED_GET_TODOS;
      payload: { todos: TodoType[]; loadingTodos: boolean };
    }
  | {
      type: ActionType.FAIL_GET_TODOS;
      payload: { todos: TodoType[]; loadingTodos: boolean };
    }
  | {
      type: ActionType.SET_ACTIVE_TODO;
      payload: { todoActive: TodoType | undefined };
    }
  | {
      type: ActionType.SET_ACTIVE_TODODETAILITEM;
      payload: { todoDetailItemActive: TodoDetailItemType | undefined };
    }
  | {
      type: ActionType.SEND_GET_TODODETAIL;
      payload: { todoDetail: TodoDetailItemType[]; loadingTodoDetail: boolean };
    }
  | {
      type: ActionType.RECEIVED_GET_TODODETAIL;
      payload: { todoDetail: TodoDetailItemType[]; loadingTodoDetail: boolean };
    }
  | {
      type: ActionType.FAIL_GET_TODODETAIL;
      payload: { todoDetail: TodoDetailItemType[]; loadingTodoDetail: boolean };
    }
  | {
      type: ActionType.SEND_UPDATE_DONE_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType | undefined };
    }
  | {
      type: ActionType.RECEIVED_UPDATE_DONE_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType };
    }
  | {
      type: ActionType.FAIL_UPDATE_DONE_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType | undefined };
    }
  | {
      type: ActionType.SEND_UPDATE_DESC_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType | undefined };
    }
  | {
      type: ActionType.RECEIVED_UPDATE_DESC_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType };
    }
  | {
      type: ActionType.FAIL_UPDATE_DESC_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType | undefined };
    }
  | {
      type: ActionType.SEND_STORE_TODO;
      payload: { todo: TodoType | undefined };
    }
  | {
      type: ActionType.RECEIVED_STORE_TODO;
      payload: { todo: TodoType };
    }
  | {
      type: ActionType.FAIL_STORE_TODO;
      payload: { todo: TodoType | undefined };
    }
  | {
      type: ActionType.SEND_UPDATE_TODO;
      payload: { todo: TodoType | undefined };
    }
  | {
      type: ActionType.RECEIVED_UPDATE_TODO;
      payload: { todo: TodoType };
    }
  | {
      type: ActionType.FAIL_UPDATE_TODO;
      payload: { todo: TodoType | undefined };
    }
  | {
      type: ActionType.SEND_DELETE_TODO;
      payload: { todo_id: number | undefined };
    }
  | {
      type: ActionType.RECEIVED_DELETE_TODO;
      payload: { todo_id: number };
    }
  | {
      type: ActionType.FAIL_DELETE_TODO;
      payload: { todo_id: number | undefined };
    }
  | {
      type: ActionType.SEND_STORE_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType | undefined };
    }
  | {
      type: ActionType.RECEIVED_STORE_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType };
    }
  | {
      type: ActionType.FAIL_STORE_TODODETAILITEM;
      payload: { todoDetailItem: TodoDetailItemType | undefined };
    };

interface Props {
  children: JSX.Element | JSX.Element[];
}

type TodoContextProps = {
  state: TodoStateType;
  getTodos: () => void;
  getTodoDetail: (todo_id: number) => void;
  updateTodo: (todo_id: number, title: string) => void;
  updateDoneTodoDetailItem: (todoDetailItemId: number, done: number) => void;
  updateDescTodoDetailItem: (todoDetailItemId: number, desc: string) => void;
  storeTodo: (title: string) => void;
  storeTodoDetailItem: (todo_Id: number, description: string) => void;
  deleteTodo: (todo_id: number) => void;
  setTodoActive: (todo: TodoType | undefined) => void;
  setTodoDetailItemActive: (todo: TodoDetailItemType | undefined) => void;
};

export type {
  HttpLoginResponse,
  HttpErrorResponse,
  HttpTodosResponse,
  HttpTodoDetailResponse,
  HttpTodoUpdateResponse,
  HttpTodoDetailItemUpdateResponse,
  TodoType,
  TodosProp,
  TodoProp,
  TodoDetailItemType,
  TodoStateType,
  TodoActionType,
  TodoContextProps,
  Props,
};
