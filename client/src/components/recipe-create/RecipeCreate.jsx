import { useNavigate } from "react-router";
import recipeService from "../../service/recipeService";
import PrimaryBtn from "../common/buttons/PrimaryBtn";

import styles from "./RecipeCreate.module.css";

export default function RecipeCreate() {
  const navigate = useNavigate();

  const submitionAction = async (formData) => {
    const recipeData = Object.fromEntries(formData);

    await recipeService.create(recipeData);

    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center bg-white sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-gradient-to-t from-white to-pink-100 px-4 py-8 shadow-lg sm:rounded-lg sm:px-10">
            {/* <!-- Header --> */}
            <div className={styles["header"]}>
              <h2>New recipe</h2>
            </div>

            {/* <!-- Form --> */}
            <form className="space-y-6" action={submitionAction}>
              {/* <!-- Title --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Banana Spinach Muffins"
                />
                <label htmlFor="title">Title</label>
              </div>

              {/* <!-- Description --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Nutritious banana spinach muffins made right in your blender! ..."
                />
                <label htmlFor="description">Description</label>
              </div>

              {/* <!-- Preparation time --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="prepTime"
                  name="prepTime"
                  placeholder="20"
                />
                <label htmlFor="prepTime">Preparation time (in minutes)</label>
              </div>

              {/* <!-- Cook time --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="cookTime"
                  name="cookTime"
                  placeholder="60"
                />
                <label htmlFor="cookTime">Cook time (in minutes)</label>
              </div>

              {/* <!-- Image --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="https://www.ambitiouskitchen.com/wp-content/uploads/2021/06/Banana-Spinach-Muffins-5-594x594.jpg"
                />
                <label htmlFor="imageUrl">Image</label>
              </div>

              {/* <!-- Ingredients --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="3 cups (128g) spinach ..."
                />
                <label htmlFor="ingredients">Ingredients</label>
              </div>

              {/* <!-- Steps --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="steps"
                  name="steps"
                  placeholder="Add the eggs, bananas, maple syrup/honey, dairy free milk, spinach and vanilla extract to a large ..."
                />
                <label htmlFor="steps">Steps</label>
              </div>

              <PrimaryBtn>Create</PrimaryBtn>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
