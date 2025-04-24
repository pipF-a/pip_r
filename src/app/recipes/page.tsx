import { Balloon } from "@/components/codeRecipes/Balloon";
import { DataCount } from "@/components/codeRecipes/DataCount";
import { Nav } from "@/components/codeRecipes/Nav";
import { Tab } from "@/components/codeRecipes/Tab";
import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";;

export default async function RecipesPage() {

  const recipes = [
    {
      recipe:<Balloon/>,
      name:'balloon',
    },
    {
      recipe:<Tab/>,
      name:'tabs',
    },
    {
      recipe:<Nav/>,
      name:'nav',
    },
    {
      recipe:<DataCount/>,
      name:'datacount',
    },

  ]
  
  return (
      <>
        <Header title={'pip_r'}/>
        <main className="pt-16 pr-4 pl-4">
          <div className="container mx-auto">
            <h2>codeRecipes</h2>
            <ul className="sm:grid grid-cols-3 grid-rows-3 gap-4">
              {recipes.map((recipe)=>(
                <li key={recipe.name}>
                  <div className="grid place-items-center bg-[image:var(--notebg)] bg-center bg-repeat bg-[size:15px_15px] p-4 border-1 border-[var(--blue01)] rounded-md min-h-[120px] max-h-[120px] overflow-auto recipeWrap">
                    {recipe.recipe}
                  </div>
                  <p className="mt-1 text-center text-violet-400">{recipe.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer title={'©pip_r'}/>
      </>
  );
}