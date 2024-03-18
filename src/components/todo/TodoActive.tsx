import { useTodos } from "../../hooks/useTodos";
import TodoDetailList from "../TodoDetail/TodoDetailList";

const TodoActive = () => {
  const { todoActive } = useTodos();

  if (!todoActive) {
    return <></>;
  }

  return (
    <div>
      <span className="text-uppercase text-warning">{todoActive.title}</span>
      <div>
        <TodoDetailList />
      </div>
    </div>
  );
};

export default TodoActive;
