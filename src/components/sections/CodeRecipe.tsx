import { Balloon } from "../codeRecipes/Balloon"
import { DataCount } from "../codeRecipes/DataCount"
import { Nav } from "../codeRecipes/Nav"
import { Tab } from "../codeRecipes/Tab"

export const CodeRecipe = () => {

  const recipes = [
    {
      recipe:<Balloon/>,
      name:'バルーン',
    },
    {
      recipe:<Tab/>,
      name:'タブ',
    },
    {
      recipe:<Nav/>,
      name:'ナビゲーション',
    },
    {
      recipe:<DataCount/>,
      name:'データカウント',
    },

  ]

  return (
    <section className="mb-4 shadow-[var(--custom-shadow)] rounded-md p-4 bg-white col-span-2">
      <h2 className="text-[18px] font-[300] mb-4 text-darkGrayishBlue">CodeRecipe</h2>
      <div>
        <ul className="sm:grid grid-cols-2 grid-rows-2 gap-4">
          {recipes.map((recipe)=>(
            <li key={recipe.name}>
              <div className="grid place-items-center bg-[image:var(--notebg)] bg-center bg-repeat bg-[size:22px_22px] p-4 border-1 border-[var(--blue01)] rounded-md min-h-[120px] max-h-[120px] overflow-auto">
                {recipe.recipe}
              </div>
              <p className="mt-1 text-center text-violet-400">{recipe.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}