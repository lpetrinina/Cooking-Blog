import PrimaryBtn from "../common/buttons/PrimaryBtn";
import styles from "./RecipeEdit.module.css";

export default function RecipeEdit() {
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
            <form className="space-y-6">
              {/* <!-- Title --> */}
              <div className={styles["filed"]}>
                <input type="text" id="title" name="title" />
                <label htmlFor="title">Title</label>
              </div>

              {/* <!-- Description --> */}
              <div className={styles["filed"]}>
                <textarea id="description" name="description" />
                <label htmlFor="description">Description</label>
              </div>

              {/* <!-- Preparation time --> */}
              <div className={styles["filed"]}>
                <input type="text" id="prepTime" name="prepTime" />
                <label htmlFor="prepTime">Preparation time (in minutes)</label>
              </div>

              {/* <!-- Cook time --> */}
              <div className={styles["filed"]}>
                <input type="text" id="cookTime" name="cookTime" />
                <label htmlFor="cookTime">Cook time (in minutes)</label>
              </div>

              {/* <!-- Image --> */}
              <div className={styles["filed"]}>
                <input type="text" id="imageUrl" name="imageUrl" />
                <label htmlFor="imageUrl">Image</label>
              </div>

              {/* <!-- Ingredients --> */}
              <div className={styles["filed"]}>
                <textarea id="ingredients" name="ingredients" />
                <label htmlFor="ingredients">Ingredients</label>
              </div>

              {/* <!-- Steps --> */}
              <div className={styles["filed"]}>
                <textarea id="steps" name="steps" />
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
