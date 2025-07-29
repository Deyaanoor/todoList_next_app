"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { deleteTodoActions } from "@/actions/todo.actions";
import { Pen, Trash } from "lucide-react";
import Spinner from "./spinner";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-end space-x-2">
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoActions({ id: todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodosTableActions;
