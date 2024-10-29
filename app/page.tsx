import { getAllTodos } from "@/actions/todoActions";
import AddTodo from "@/components/AddTodo";
import TodoTable from "@/components/TodoTable";
import { ITodo } from "@/interfaces";

export default async function Home() {
  const todos: ITodo[] = await getAllTodos();
  return (
    <div className="container mx-auto">
      <AddTodo />
      <TodoTable todos={todos} />
    </div>
  );
}
