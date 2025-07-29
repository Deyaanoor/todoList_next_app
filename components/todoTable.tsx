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
      <TableCaption>A list of your ToDo </TableCaption>
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
          <TableRow key={todo?.id}>
            <TableCell className="font-medium">{todo?.id}</TableCell>
            <TableCell className="font-medium">{todo?.title}</TableCell>

            <TableCell>
              {todo?.completed ? (
                <Badge>{todo?.completed ? "Completed" : "Incompleted"}</Badge>
              ) : (
                <Badge variant={"destructive"}>
                  {todo?.completed ? "Completed" : "Incompleted"}
                </Badge>
              )}
            </TableCell>
            <TableCell>
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="text-center"></TableCell>
          <TableCell className="text-right">
            {!todos.length ? "YOU DON'T HAVE ANY TODO YET" : todos.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
