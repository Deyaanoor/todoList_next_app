import { getUserTodoListActions } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { TodoTable } from "@/components/todoTable";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodoListActions({ userId });
  if (!userId) {
    return redirect("/sign-in");
  }
  return (
    <main className="flex min-h-screen flex-col  justify-between p-16">
      <AddTodoForm userId={userId ?? ""} />
      <div className="flex justify-between items-center mb-16"></div>
      <TodoTable todos={todos} />
    </main>
  );
}
