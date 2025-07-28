"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { title } from "process";


const prisma = new PrismaClient();

export const getTodoActions = async () => {
    
   return await prisma.todo.findMany({
         orderBy: {
            createdAt: "desc",
         },
   })
};

export const createTodoActions = async ({title,body,completed}:{title:string ;body:string|undefined;completed:boolean}) => {
   await prisma.todo.create({
       data: {
          title,
          body,
         completed
       },
   });
    revalidatePath("/");
};
export const updateTodoActions = async () => {};
export const deleteTodoActions = async ({id}:{id:string}) => {
   await prisma.todo.delete({
       where: {
           id,
       },
   });
   revalidatePath("/");
};