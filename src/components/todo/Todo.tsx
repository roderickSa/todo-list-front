import { useEffect } from "react";
import TodoActive from "./TodoActive";
import TodoList from "./TodoList";
import { useTodos } from "../../hooks/useTodos";

const Todo = () => {
  const { todos, getTodos } = useTodos();

  useEffect(() => {
    getTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container text-white">
        <div className="mb-3 mt-4">
          <h2 className="d-grid justify-content-center pt-1">Todo-App</h2>
        </div>
        <div className="row p-3">
          <div className="col-md-6">
            <TodoList todos={todos} />
          </div>
          <div className="col-md-6">
            <TodoActive />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
