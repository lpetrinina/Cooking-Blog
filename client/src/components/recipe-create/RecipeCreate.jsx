import PrimaryBtn from "../common/buttons/PrimaryBtn";
import styles from "./RecipeCreate.module.css";

export default function RecipeCreate() {
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
            <form className="space-y-6">
              {/* <!-- Title --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="title"
                  placeholder="Banana Spinach Muffins"
                />
                <label htmlFor="title">Title</label>
              </div>

              {/* <!-- Description --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="description"
                  placeholder="Nutritious banana spinach muffins made right in your blender! ..."
                />
                <label htmlFor="description">Description</label>
              </div>

              {/* <!-- Preparation time --> */}
              <div className={styles["filed"]}>
                <input type="text" id="prepTime" placeholder="20" />
                <label htmlFor="prepTime">Preparation time (in minutes)</label>
              </div>

              {/* <!-- Cook time --> */}
              <div className={styles["filed"]}>
                <input type="text" id="cookTime" placeholder="60" />
                <label htmlFor="cookTime">Cook time (in minutes)</label>
              </div>

              {/* <!-- Image --> */}
              <div className={styles["filed"]}>
                <input
                  type="text"
                  id="imageUrl"
                  placeholder="https://www.ambitiouskitchen.com/banana-spinach-muffins/"
                />
                <label htmlFor="imageUrl">Image</label>
              </div>

              {/* <!-- Ingredients --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="ingredients"
                  placeholder="3 cups (128g) spinach ..."
                />
                <label htmlFor="ingredients">Ingredients</label>
              </div>

              {/* <!-- Steps --> */}
              <div className={styles["filed"]}>
                <textarea
                  id="steps"
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
