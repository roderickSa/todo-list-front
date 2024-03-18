import { createContext } from "react";
import { TodoContextProps } from "../types";

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default TodoContext;
