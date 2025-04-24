'use server';

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

interface Todo {
  id: number;
  title: string;
}

// 取得関数
export const getAllTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data as Todo[];
}

// 追加関数
export const addTodos = async (formData:FormData) => {
  const todoTitle = formData.get('todotext') as string;
    if (!todoTitle?.trim()){
      return;
    };
  await supabase.from('todos').insert({title:todoTitle})
  revalidatePath('/');
}

// 削除関数
export const deleteTodo = async (formData:FormData) => {
  const id = formData.get('id') as string;
  await supabase
  .from('todos')
  .delete()
  .eq('id', id)
  revalidatePath('/')
}