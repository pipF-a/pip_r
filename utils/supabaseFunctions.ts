'use server';

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

interface Todo {
  id: number;
  title: string;
}


export const getAllTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("todo").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data as Todo[];
}

export const addTodos = async (formData:FormData) => {
  const todoTitle = formData.get('todotext') as string;
    if (!todoTitle?.trim()){
      return;
    };
  await supabase.from('todo').insert({title:todoTitle})
  revalidatePath('/');
}