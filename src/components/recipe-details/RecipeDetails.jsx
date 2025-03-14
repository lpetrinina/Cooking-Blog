import styles from "./RecipeDetails.module.css";

export default function RecipeDetails() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["container"]}>
        <header className={`${styles["section-header"]}`}>
          <div className={styles["text-container"]}>
            <h1 className={styles["post-title"]}>
              Blender Banana Spinach Muffins
            </h1>
            <p className={styles["post-info"]}>
              Nutritious banana spinach muffins made right in your blender!
              These easy, kid-friendly banana spinach muffins are gluten free
              thanks to almond flour and oat flour and are naturally sweetened
              with a touch of pure maple syrup. They’re packed with sneaky
              veggies and make the perfect, freezer-friendly snack or breakfast
              for kiddos!
            </p>

            <div className={styles["recipe-times"]}>
              <div>
                <div className={styles["rt-label"]}>Prep time</div>
                <div className={styles["rt-value"]}>20 min</div>
              </div>
              <div>
                <div className={styles["rt-label"]}>Cook time</div>
                <div className={styles["rt-value"]}>60 min</div>
              </div>
              <div>
                <div className={styles["rt-label"]}>Total time</div>
                <div className={styles["rt-value"]}>80 min</div>
              </div>
            </div>

            <div className={styles["recipe-feedback"]}>
              <div className={styles["likes"]}>
                <img src="/heart-svgrepo-com.svg" alt="" />
                <p> 36 Likes</p>
              </div>

              <div className={styles["coments"]}>
                <img src="/message-svgrepo-com.svg" alt="" />
                <p> 5 Coments</p>
              </div>
            </div>
          </div>

          <div className={styles["image-container"]}>
            <img
              src="/images/banana-spanich-muffins.png"
              alt="Banana spanich muffins"
            />
          </div>
        </header>

        <section className={styles["section-ingredients"]}>
          <h2>Ingredients</h2>

          <ul className={styles["ingredients-list"]}>
            <li>2 eggs</li>
            <li>2 medium to large extra ripe</li>
            <li>¼ cup (78g) pure maple syrup or honey</li>
            <li>⅓ cup (80g) dairy free milk of choice (I used almond milk)</li>
            <li>3 cups (128g) spinach</li>
            <li>1 teaspoon vanilla extract</li>
            <li>1 cup (112g) packed blanched almond flour</li>
            <li>1 cup (92g) oat flour, gluten free if desired</li>
            <li>¼ cup (30g) flaxseed meal</li>
          </ul>
        </section>

        <section className={styles["section-instructions"]}>
          <h2>Instructions</h2>
          <ul className={styles["instructions-list"]}>
            <li>
              <span className={styles["step"]}>1.</span>
              <p>
                Preheat the oven to 375 degrees F. Line a muffin tin with 10
                muffin liners (we’re only making 10 muffins). Spray the inside
                of the muffin liners with nonstick cooking spray so the muffins
                do not stick to the liners.
              </p>
            </li>
            <li>
              <span className={styles["step"]}>2.</span>
              <p>
                Add the eggs, bananas, maple syrup/honey, dairy free milk,
                spinach and vanilla extract to a large, high powered blender and
                blend on high for 1 minute or until completely smooth. Set
                aside.
              </p>
            </li>
            <li>
              <span className={styles["step"]}>3.</span>
              <p>
                In a large bowl whisk together the almond flour, oat flour,
                flaxseed meal, cinnamon, baking powder, baking soda and salt
                until well combined. Pour the blended wet ingredients over the
                dry ingredients and mix with a wooden spoon until well combined.
                Feel free to stir in hemp hearts, if using. Divide the batter
                between the muffin liners. Bake for 20-25 minutes or until a
                toothpick comes out clean or with just a few crumbs attached.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
