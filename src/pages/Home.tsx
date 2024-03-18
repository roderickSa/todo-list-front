import Todo from "../components/todo/Todo";
import { TodoProvider } from "../state/TodoProvider";

const Home = () => {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
};

export default Home;
