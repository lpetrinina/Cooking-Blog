import RecipeItem from "../catalog/RecipeItem";

export default function Home() {
  return (
    <>
      <div className="mb-5 flex justify-between border-b text-sm">
        <div className="flex items-center border-b-2 border-pink-400 pb-2 pr-2 uppercase text-pink-600">
          <img
            src="/heart-decoration-svgrepo-com.svg"
            alt=""
            className="h-4 w-auto"
          />

          <a href="#" className="ml-2 inline-block font-semibold">
            Most Popular
          </a>
        </div>
        <a href="#">See All</a>
      </div>

      {/* The most liked 3 posts */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* <!-- CARD 1 --> */}
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
      </div>
    </>
  );
}
