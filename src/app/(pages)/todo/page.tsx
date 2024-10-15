import TodoForm from "@/app/_components/TodoForm";
import TodoList from "@/app/_components/TodoList";

const Page = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm/>
      <TodoList/>
    </div>
  );
};

export default Page;
