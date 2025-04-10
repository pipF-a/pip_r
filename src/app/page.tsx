import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
// import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { BuildWith } from "@/components/sections/BuildWith";
import { CodeRecipe } from "@/components/sections/CodeRecipe";
import { auth } from "../../utils/auth";
import { Todos } from "@/components/sections/Todos";
import { TodosGuest } from "@/components/sections/TodosGuest";



export default async function Home() {
  const sesstion = await auth();
  return (
      <>
      
        <Header title={'pip_r'}/>
        <main className="pt-16 pr-4 pl-4 bg-[image:var(--notebg02)] bg-center bg-repeat bg-[size:15px_15px]">
          <div className="container mx-auto grid grid-cols-4 grid-rows-1 gap-7">
            <About/>
            <BuildWith/>
            <CodeRecipe/>
            {sesstion ? <Todos/> : <TodosGuest/>}
          </div>
        </main>
        <Footer title={'©pip_r'}/>
        
      </>
  );
}
