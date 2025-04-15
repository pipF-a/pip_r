import { supabase } from "./supabase";

// Todo型を定義
interface Todo {
  id: number;
  title: string;
}


// getAllTodos関数に型を付与
export const getAllTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase.from("todo").select("*");

  if (error) {
    throw new Error(error.message);
  }

  // dataがTodo型の配列であることを確実にする
  return data as Todo[];
}

