"use server";

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getAllTodos = async ({ userId }: { userId: string }) => {
  return await prisma.todo.findMany({
    where: {
      userId,
    },
    orderBy: { createdAt: "desc" },
  });
};

export const addTodo = async ({
  title,
  body,
  isCompleted,
  userId,
}: {
  title: string;
  body: string;
  isCompleted: boolean;
  userId: string | null;
}) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      isCompleted,
      userId: userId as string,
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
