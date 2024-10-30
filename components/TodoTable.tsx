import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";
import TodoActionsBtns from "./TodoActionsBtns";
const TodoTable = ({ todos }: { todos: ITodo[] }) => {
  return todos.length > 0 ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
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
            <TableCell className="text-right">
              <TodoActionsBtns todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{todos && todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ) : (
    "This User hasn't Any Todos"
  );
};

export default TodoTable;
