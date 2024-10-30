import { getAllTodos } from "@/actions/todoActions";
import AddTodo from "@/components/AddTodo";
import TodoTable from "@/components/TodoTable";
import { ITodo } from "@/interfaces";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId }: { userId: string | null } = await auth();
  const todos: ITodo[] = await getAllTodos({ userId: userId as string });
  return (
    <div className="container mx-auto">
      <AddTodo userId={userId} />
      <TodoTable todos={todos} />
    </div>
  );
}
