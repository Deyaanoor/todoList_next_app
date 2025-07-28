import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ITodo } from "@/interfaces";
import TodosTableActions from "./TodosTableActions";

export function TodoTable({ todos }: { todos: ITodo[] }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell className="font-medium">{todo.title}</TableCell>

            <TableCell>
              {todo.completed ? (
                <Badge>{todo.completed ? "Completed" : "Incompleted"}</Badge>
              ) : (
                <Badge variant={"destructive"}>
                  {todo.completed ? "Completed" : "Incompleted"}
                </Badge>
              )}
            </TableCell>
            <TableCell>
              <TodosTableActions id={todo.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
