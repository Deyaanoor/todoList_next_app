import { getTodoActions } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/todoTable";
export default async function Home() {
  const todos = await getTodoActions();
  return (
    <main className="flex min-h-screen flex-col  justify-between p-16">
      <AddTodoForm />
      <div className="flex justify-between items-center mb-16"></div>
      <TodoTable todos={todos} />
    </main>
  );
}
