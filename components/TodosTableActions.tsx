"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { deleteTodoActions } from "@/actions/todo.actions";
import { Pen, Trash } from "lucide-react";
import Spinner from "./spinner";

const TodosTableActions = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex justify-end space-x-2">
      <Button size={"icon"}>
        <Pen />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoActions({ id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </div>
  );
};

export default TodosTableActions;
