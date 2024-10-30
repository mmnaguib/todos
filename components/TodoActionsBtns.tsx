"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { deleteTodo } from "@/actions/todoActions";
import Spinner from "./ui/Spinner";
import EditTodo from "./EditTodo";
import { ITodo } from "@/interfaces";

const TodoActionsBtns = ({ todo }: { todo: ITodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodo todo={todo} />
      <Button
        variant={"destructive"}
        size={"icon"}
        className="ml-3"
        onClick={async () => {
          setLoading(true);
          await deleteTodo({ id: todo.id });
          setLoading(false);
        }}
        disabled={loading}
      >
        {loading ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
};

export default TodoActionsBtns;
