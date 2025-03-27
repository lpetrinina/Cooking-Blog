import RecipeItemBasic from "../recipe-item/RecipeItemBasic";

export default function UserProfile() {
  return (
    <>
      <div className="flex flex-col">
        <div className="mb-8 flex max-w-72 gap-3 self-end text-center text-gray-500">
          <div className="text-md mt-5">
            <p className="font-normal text-gray-900">
              Wellcome, <span className="font-medium">Peter Ivanov</span>!
            </p>
            <p className="text-sm">(peter@abv.bg)</p>
          </div>
        </div>

        <div className="mb-10">
          <div className="mb-7 flex justify-between border-b text-sm">
            <div className="flex items-center border-b-2 border-pink-400 pb-2 pr-2 uppercase text-pink-600">
              <p className="ml-2 inline-block font-semibold">Your Recipes</p>
            </div>
          </div>

          {/* <p className="mb-10 mt-28 text-center text-lg font-bold tracking-wide text-gray-500">
            You have no recipes in this category!
          </p> */}

          <div className="mx-auto flex flex-col flex-wrap gap-4 md:flex md:flex-row lg:justify-between">
            <RecipeItemBasic />
            <RecipeItemBasic />
          </div>
        </div>

        {/* <div>
          <div className="mb-7 flex justify-between border-b text-sm">
            <div className="flex items-center border-b-2 border-pink-400 pb-2 pr-2 uppercase text-pink-600">
              <p className="ml-2 inline-block font-semibold">Liked Recipes</p>
            </div>
          </div>

          <p className="mb-10 mt-28 text-center text-lg font-bold tracking-wide text-gray-500">
         You have no recipes in this category.
          </p>

          <div className="mx-auto flex flex-col flex-wrap justify-between gap-4 md:flex md:flex-row">
            <RecipeItemBasic />
            <RecipeItemBasic />
            <RecipeItemBasic />
            <RecipeItemBasic />
          </div>
        </div> */}
      </div>
    </>
  );
}
