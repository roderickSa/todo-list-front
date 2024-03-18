import { useTodos } from "../../hooks/useTodos";
import { TodosProp } from "../../types";
import TodoForm from "./TodoForm";
import TodoFormUpdate from "./TodoFormUpdate";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }: TodosProp) => {
  const { loadingTodos, todoActive } = useTodos();

  if (loadingTodos) {
    return <h3>Consultado Todos...</h3>;
  }

  return (
    <div className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {todoActive ? <TodoFormUpdate /> : <TodoForm />}
    </div>
  );
};

export default TodoList;
