"use server";

import { ITodo } from "@/interfaces";
import { TodoFormValues } from "@/zodSchemas/addTodoSchema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllTodos = async () => {
  return await prisma.todo.findMany({ orderBy: { createdAt: "desc" } });
};

export const addTodo = async ({ title, body, isCompleted }: TodoFormValues) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      isCompleted,
    },
  });

  revalidatePath("/");
};

export const deleteTodo = async ({ id }: { id: string }) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
};

export const editTodo = async (todo: ITodo) => {
  await prisma.todo.update({
    where: {
      id: todo.id,
    },
    data: {
      title: todo.title,
      body: todo.body,
      isCompleted: todo.isCompleted,
    },
  });

  revalidatePath("/");
};
