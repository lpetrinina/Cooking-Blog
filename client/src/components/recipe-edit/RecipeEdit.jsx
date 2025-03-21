import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import PrimaryBtn from "../common/buttons/PrimaryBtn";
import styles from "./RecipeEdit.module.css";
import recipeService from "../../service/recipeService";

export default function RecipeEdit() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    recipeService.getOne(recipeId).then((result) => setRecipe(result));
  }, [recipeId]);

  };

  return (
    <>
      <div className="flex flex-col justify-center bg-white sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-gradient-to-t from-white to-pink-100 px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
            {/* <!-- Header --> */}
            <div className={styles["header"]}>
              <h2>Edit recipe</h2>
            </div>

            {/* <!-- Form --> */}
            <form className="space-y-6" action={formAction}>
              {/* <!-- Title --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={recipe.title}
                />
                <label htmlFor="title">Title</label>
              </div>

              {/* <!-- Description --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={recipe.description}
                />
                <label htmlFor="description">Description</label>
              </div>

              {/* <!-- Preparation time --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  defaultValue={recipe.prepTime}
                />
                <label htmlFor="prepTime">Preparation time (in minutes)</label>
              </div>

              {/* <!-- Cook time --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  defaultValue={recipe.cookTime}
                />
                <label htmlFor="cookTime">Cook time (in minutes)</label>
              </div>

              {/* <!-- Image --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  defaultValue={recipe.imageUrl}
                />
                <label htmlFor="imageUrl">Image</label>
              </div>

              {/* <!-- Ingredients --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  defaultValue={recipe.ingredients}
                />
                <label htmlFor="ingredients">Ingredients</label>
              </div>

              {/* <!-- Steps --> */}
              <div className={styles["filed"]}>
                <textarea id="steps" name="steps" defaultValue={recipe.steps} />
                <label htmlFor="steps">Steps</label>
              </div>

              <PrimaryBtn>Submit</PrimaryBtn>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
