import { useEffect, useState } from "react";
import RecipeItem from "./RecipeItem";
import recipeService from "../../service/recipeService";

export default function Catalog() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll().then((result) => setRecipes(result));
  }, []);

  return (
    <>
      <div className="mb-5 flex justify-between border-b text-sm">
        <div className="flex items-center border-b-2 border-pink-400 pb-2 pr-2 uppercase text-pink-600">
          <img src="/heart-decoration-svgrepo-com.svg" className="h-4 w-auto" />
          <p className="ml-2 inline-block font-semibold">All Recipes</p>
        </div>
      </div>

      {recipes.length > 0 && (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeItem key={recipe._id} {...recipe} />
          ))}
        </div>
      )}

      {recipes.length === 0 && (
        <p className="mt-28 text-center text-xl font-bold tracking-wide text-gray-500">
          There is no recipe yet!
        </p>
      )}
    </>
  );
}
