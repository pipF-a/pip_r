
export const TodosGuest = () => {
    return(
      <>
        <section className="mb-4 col-span-2 row-span-2 col-start-3 row-start-1 shadow-[var(--custom-shadow)] rounded-md p-4 overflow-auto bg-white grid place-content-center place-items-center">
          <div>
            <hgroup>
              <p className="grid place-content-center"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"  fill="#5f6368" className="w-16"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg></p>
              <h2 className="text-[#71717a]">管理者のみが閲覧できます。</h2>
            </hgroup>
          </div>
        </section>
      </>
    )
}