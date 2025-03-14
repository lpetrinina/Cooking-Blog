import RecipeItem from "./catalog/RecipeItem";

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
        {/* <a href="#">See All</a> */}
      </div>

      {/* The most liked 3 posts */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {/* <!-- CARD 1 --> */}
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />

        {/* <!-- CARD 2 --> */}
        {/* <div className="flex flex-col overflow-hidden rounded shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent"></div>
            </a>
            <a href="#!">
              <div className="absolute right-0 top-0 mr-3 mt-3 bg-indigo-600 px-4 py-2 text-xs text-white transition duration-500 ease-in-out hover:bg-white hover:text-indigo-600">
                Cooking
              </div>
            </a>
          </div>
          <div className="mb-auto px-6 py-4">
            <a
              href="#"
              className="mb-2 inline-block text-lg font-medium transition duration-500 ease-in-out hover:text-indigo-600"
            >
              Best FastFood Ideas (Yummy)
            </a>
            <p className="text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-row items-center justify-between bg-gray-100 px-6 py-3">
            <span
              href="#"
              className="font-regular mr-1 flex flex-row items-center py-1 text-xs text-gray-900"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512;" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1"> 10 days ago</span>
            </span>

            <span
              href="#"
              className="font-regular mr-1 flex flex-row items-center py-1 text-xs text-gray-900"
            >
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="ml-1">0 Comments</span>
            </span>
          </div>
        </div> */}

        {/* <!-- CARD 3 --> */}
        {/* <div className="flex flex-col overflow-hidden rounded shadow-lg">
          <a href="#"></a>
          <div className="relative">
            <a href="#">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                alt="Sunset in the mountains"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-900 opacity-25 transition duration-300 hover:bg-transparent"></div>
            </a>
            <a href="#!">
              <div className="absolute right-0 top-0 mr-3 mt-3 bg-indigo-600 px-4 py-2 text-xs text-white transition duration-500 ease-in-out hover:bg-white hover:text-indigo-600">
                Cooking
              </div>
            </a>
          </div>
          <div className="mb-auto px-6 py-4">
            <a
              href="#"
              className="mb-2 inline-block text-lg font-medium transition duration-500 ease-in-out hover:text-indigo-600"
            >
              Why to eat salad?
            </a>
            <p className="text-sm text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-row items-center justify-between bg-gray-100 px-6 py-3">
            <span
              href="#"
              className="font-regular mr-1 flex flex-row items-center py-1 text-xs text-gray-900"
            >
              <svg
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512;" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">16 hours ago</span>
            </span>

            <span
              href="#"
              className="font-regular mr-1 flex flex-row items-center py-1 text-xs text-gray-900"
            >
              <svg
                className="h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              <span className="ml-1">9 Comments</span>
            </span>
          </div>
        </div> */}
      </div>
    </>
  );
}
