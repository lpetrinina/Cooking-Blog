import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";

import CommnetsList from "../comments/CommentsList";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import Spinner from "../common/spinner/Spinner";
import DeleteModal from "../common/modal/DeleteModal";

import { useDeleteRecipe, useOneRecipe } from "../../api/recipeApi";
import styles from "./RecipeDetails.module.css";
import useAuth from "../../hooks/useAuth";
import { useDislikeRecipe, useLikeRecipe, useLikes } from "../../api/likesApi";

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { authData } = useAuth();
  const { recipeId } = useParams();
  const { recipe, isPending } = useOneRecipe(recipeId);
  const { deleteRecipe } = useDeleteRecipe();
  const [isOpen, setIsOpen] = useState(false);
  const { isLiked, setIsLiked, likes, setLikes, likeId, setLikeId } =
    useLikes(recipeId);
  const { likeRecipe } = useLikeRecipe();
  const { dislikeRecipe } = useDislikeRecipe();

  console.log(isLiked);
  console.log(likes);
  console.log(likeId);

  const isOwner = recipe._ownerId === authData._id;

  const clickDeleteHadler = () => {
    deleteRecipe(recipeId);

    navigate("/recipes");
  };
  const clickCancelHandler = () => {
    setIsOpen(false);
  };

  const clickLikeHandler = async () => {
    const data = await likeRecipe(recipeId);
    setLikes((currentData) => [...currentData, data]);
    setIsLiked(true);
    setLikeId(data._id);
  };

  const clickDislikeHandler = async () => {
    await dislikeRecipe(likeId);

    setLikes((currentLikes) =>
      currentLikes.filter((like) => like._id !== likeId),
    );
    setIsLiked(false);
    setLikeId(null);
  };

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          <div className={styles["wrapper"]}>
            <div className={styles["container"]}>
              <header className={`${styles["section-header"]}`}>
                <div className={styles["text-container"]}>
                  <h1 className={styles["post-title"]}>{recipe.title}</h1>

                  <p className={styles["post-info"]}>{recipe.description}</p>

                  <div className={styles["recipe-times"]}>
                    <div>
                      <div className={styles["rt-label"]}>Prep time</div>
                      <div className={styles["rt-value"]}>
                        {recipe.prepTime} min
                      </div>
                    </div>
                    <div>
                      <div className={styles["rt-label"]}>Cook time</div>
                      <div className={styles["rt-value"]}>
                        {recipe.cookTime} min
                      </div>
                    </div>
                    <div>
                      <div className={styles["rt-label"]}>Total time</div>
                      <div className={styles["rt-value"]}>
                        {recipe.cookTime + recipe.prepTime} min
                      </div>
                    </div>
                  </div>

                  <div className={styles["recipe-feedback"]}>
                    <div className={styles["likes"]}>
                      <img src="/heart-svgrepo-com.svg" alt="" />
                      <p> {likes.length} Likes</p>
                    </div>

                    <div className={styles["coments"]}>
                      <img src="/message-svgrepo-com.svg" alt="" />
                      <p> 5 Coments</p>
                    </div>
                  </div>
                </div>

                <div className={styles["image-container"]}>
                  <img src={recipe.imageUrl} alt={recipe.title} />
                </div>
              </header>

              <section className={styles["section-ingredients"]}>
                <h2>Ingredients</h2>

                <ul className={styles["ingredients-list"]}>
                  {recipe.ingredients?.map((item, idx) => (
                    <li key={idx + 1}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={styles["section-instructions"]}>
                <h2>Instructions</h2>
                <ul className={styles["instructions-list"]}>
                  {recipe.steps?.map((step, idx) => (
                    <li key={idx + 1}>
                      <span className={styles["step"]}>{idx + 1}.</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Only logged users can see this section */}
              {authData._id && (
                <section>
                  {/* Every auth user can like recipe, except the owner of it*/}
                  {!isOwner && (
                    <>
                      <div className="mt-5 sm:mt-6 sm:flex sm:justify-center lg:justify-center">
                        <div className="rounded-md shadow">
                          {isLiked ? (
                            <PrimaryBtn onClick={clickDislikeHandler}>
                              Dislike
                            </PrimaryBtn>
                          ) : (
                            <PrimaryBtn onClick={clickLikeHandler}>
                              Like
                            </PrimaryBtn>
                          )}
                        </div>
                      </div>

                      {/* Auth user who already liked current recipe */}
                      {/* <p className={styles["like-msg"]}> You have already liked this recipe!</p> */}
                    </>
                  )}

                  {/* Recipe owner can edit and delete it */}
                  {isOwner && (
                    <div className="mt-5 flex flex-col items-center gap-4 sm:mt-6 sm:flex sm:flex-row sm:justify-center sm:gap-4 lg:justify-center">
                      <div className="rounded-md shadow">
                        <Link
                          to={`/recipes/${recipe._id}/edit`}
                          className="text-md block w-full items-center rounded-md bg-pink-400 px-6 py-2 font-medium leading-6 text-white ring-1 ring-pink-400 transition duration-150 ease-in-out hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-offset-1 md:px-6 md:py-2 md:text-base"
                        >
                          Edit
                        </Link>
                      </div>

                      <div className="rounded-md shadow">
                        <PrimaryBtn onClick={() => setIsOpen(!isOpen)}>
                          Delete
                        </PrimaryBtn>
                      </div>
                    </div>
                  )}
                </section>
              )}
            </div>
          </div>

          {isOpen && (
            <DeleteModal
              componentName={"recipe"}
              onCancel={clickCancelHandler}
              onDelete={clickDeleteHadler}
            />
          )}

          <CommnetsList />
        </>
      )}
    </>
  );
}
