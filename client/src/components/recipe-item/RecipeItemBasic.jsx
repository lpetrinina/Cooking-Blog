import { Link } from "react-router";

export default function RecipeItemBasic() {
  return (
    <div className="flex basis-full items-center gap-3 overflow-hidden rounded-xl border border-gray-300 bg-white lg:basis-[49%]">
      <div className="relative h-44 w-44 flex-shrink-0">
        <Link to={`/recipes/id/details`}>
          <img
            className="absolute left-0 top-0 h-full w-full object-cover object-center transition duration-75"
            loading="lazy"
            src="https://www.ambitiouskitchen.com/wp-content/uploads/2022/07/Double-Chocolate-Peanut-Butter-Banana-Baked-Oatmeal-7-594x594.jpg"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-20 transition duration-1000 hover:bg-transparent"></div>
        </Link>
      </div>

      <div className="flex flex-col gap-2 py-2">
        <Link>
          <p className="text-lg font-medium transition duration-500 ease-in-out hover:text-pink-600">
            Post title
          </p>
        </Link>

        <p className="text-sm text-gray-500">
          Description of your post/article, Description of your post/article,
        </p>
      </div>
    </div>
  );
}
