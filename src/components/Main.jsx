import Catalog from "./Catalog/Catalog";
import Home from "./Home";
import RecipeDetails from "./recipe-details/RecipeDetails";

export default function Main() {
  return (
    <>
      {/* <!-- Page content -->  */}
      <div className="bg-white pt-16">
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl bg-white p-5 sm:p-10 md:p-16">
            {/* <Home /> */}
            {/* <Catalog /> */}
            <RecipeDetails />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex h-96 items-center justify-center rounded-lg border-4 border-dashed border-gray-200">
  <p className="text-xl text-gray-500">Page Content Goes Here</p>
</div> */
}
