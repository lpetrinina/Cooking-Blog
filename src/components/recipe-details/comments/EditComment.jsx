export default function EditComment() {
  return (
    <div className="fixed inset-0 z-40 flex min-h-full items-center overflow-y-auto overflow-x-hidden transition">
      {/* <!-- overlay --> */}
      <div
        aria-hidden="true"
        className="fixed inset-0 h-full w-full cursor-pointer bg-black/50"
      ></div>

      {/* <!-- Modal --> */}
      <div className="pointer-events-none relative my-auto w-full cursor-pointer p-8 transition">
        <form className="pointer-events-auto relative m-auto max-w-xl cursor-default rounded-sm bg-white p-4 shadow-md">
          <h3 className="mb-4 text-lg font-bold">Edit your comment</h3>

          <button
            type="button"
            className="absolute right-2 top-2 rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-pink-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-pink-400 rtl:left-2 rtl:right-auto"
            data-modal-toggle="product-modal"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="mb-4">
            <label className="mb-2 block font-bold text-gray-800" for="comment">
              Comment
            </label>
            <textarea
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-1 focus:ring-inset focus:ring-pink-400"
              id="comment"
              rows="3"
              placeholder="Enter your comment"
            ></textarea>
          </div>

          <div className="mt-5 gap-4 sm:mt-6 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md">
              <button className="w-full items-center rounded-md bg-pink-400 px-6 py-2 text-sm font-medium leading-6 text-white ring-pink-400 ring-offset-1 transition duration-150 ease-in-out hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-1 md:px-5 md:py-2 md:text-sm">
                Edit
              </button>
            </div>

            <div>
              <button className="w-full items-center rounded-md px-4 py-2 text-sm font-medium text-pink-400 ring-1 ring-pink-300 hover:ring-1 hover:ring-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:ring-offset-1">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
