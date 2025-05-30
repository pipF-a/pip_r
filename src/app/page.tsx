import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { BuildWith } from "@/components/sections/BuildWith";
import { CodeRecipe } from "@/components/sections/CodeRecipe";
import { auth } from "@/utils/auth";
import  Todos  from "@/components/sections/Todos";
import { TodosGuest } from "@/components/sections/TodosGuest";
import Weather from "@/components/ui/Weather";




export default async function Home() {
  const sesstion = await auth();
  return (
      <>
        <Header title={'pip_r'}/>
        <main className="pt-16 pr-4 pl-4">
          <div className="relative container mx-auto lg:grid grid-cols-4 grid-rows-1 gap-7">
            <About/>
            <BuildWith/>
            {sesstion ? <Todos/> : <TodosGuest/>}
            <CodeRecipe/>
            <Weather/>
          </div>
        </main>
        <Footer title={'©pip_r'}/>
      </>
  );
}
