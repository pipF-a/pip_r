import { addTodos, deleteTodo, getAllTodos } from "../../../utils/supabaseFunctions";

interface Todo {
  id: number;
  title: string;
}

export default async function Todos(){

  const todos: Todo[] = await getAllTodos();
    return(
      <>
        <section className="mb-4 col-span-2 row-span-2 col-start-3 row-start-1 shadow-[var(--custom-shadow)] rounded-md p-4 overflow-auto bg-white h-fit">
          <div>
            <h2 className="text-[18px] font-[300] mb-4 text-darkGrayishBlue">Todos</h2>
            <div>
              <form action={addTodos} className="flex items-center gap-x-4" id="todoForm"  >
                <input type="text" className="bg-[var(--gray01)] p-0.5 rounded-sm" id="todotext" name="todotext" />
                <button type="submit" className="border-1 rounded-sm text-[13px] p-0.5 pr-2 pl-2 cursor-pointer">追加</button>
              </form>
              <ul className="mt-[20px]">
                {todos.map((todo) => (
                  <li className="flex border-t border-b border-gray-100 p-2" key={todo.id}>
                    {/* todoオブジェクトのプロパティを表示 */}
                    {todo.title} 
                    <form action={deleteTodo} className="ml-auto">
                      <input type="hidden" name="id" value={todo.id} />
                      <button
                        type="submit"
                        className="text-[12px] px-1 py-0.5 bg-red-500 hover:bg-red-600 text-white rounded"
                      >
                        削除
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    )
}