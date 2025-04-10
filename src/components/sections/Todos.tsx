
export const Todos = () => {
    return(
      <>
        <section className="col-span-2 row-span-2 col-start-3 row-start-1 shadow-[var(--custom-shadow)] rounded-md p-4 overflow-auto bg-white">
          <div>
            <h2 className="text-[18px] font-[300] mb-4 text-darkGrayishBlue">Todos</h2>
            <div>
              <form action="post" className="flex items-center gap-x-4">
                <input type="text" className="bg-[var(--gray01)] p-0.5 rounded-sm" />
                <button className="border-1 rounded-sm text-[13px] p-0.5 pr-2 pl-2 cursor-pointer">追加</button>
              </form>
              <ul className="mt-[20px]">
                <li className="border-t border-b border-gray-100 p-2">やること</li>
                <li className="border-b border-gray-100 p-2">やること</li>
                <li className="border-b border-gray-100 p-2">やること</li>
                <li className="border-b border-gray-100 p-2">やること</li>
                <li className="border-b border-gray-100 p-2">やること</li>
                <li className="border-b border-gray-100 p-2">やること</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    )
}