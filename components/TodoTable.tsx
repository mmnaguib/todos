import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodoActionsBtns from "./TodoActionsBtns";
const TodoTable = ({ todos }: { todos: ITodo[] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo: ITodo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.title}</TableCell>
            <TableCell className="font-medium">{todo.body}</TableCell>
            <TableCell className="font-medium">
              {todo.isCompleted ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant="secondary">Not Completed</Badge>
              )}
            </TableCell>
            <TableCell className="font-medium">
              {todo.createdAt.toUTCString()}
            </TableCell>
            <TableCell>
              <TodoActionsBtns todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoTable;
