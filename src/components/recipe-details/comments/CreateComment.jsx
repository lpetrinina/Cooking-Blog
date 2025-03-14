export default function CreateComment() {
  return (
    <form className="rounded-sm bg-white p-4 shadow-md">
      <h3 className="mb-4 text-lg font-bold">Leave a comment</h3>

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-800" for="name">
          Name
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-1 focus:ring-inset focus:ring-pink-200"
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-800" for="comment">
          Comment
        </label>
        <textarea
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:ring-1 focus:ring-inset focus:ring-pink-200"
          id="comment"
          rows="3"
          placeholder="Enter your comment"
        ></textarea>
      </div>

      <div className="mt-5 sm:mt-6 sm:flex sm:justify-center lg:justify-center">
        <div className="rounded-md shadow">
          <button className="flex w-full items-center justify-center rounded-md bg-pink-400 px-6 py-2 text-base font-medium leading-6 text-white ring-pink-400 ring-offset-1 transition duration-150 ease-in-out hover:bg-pink-500 hover:text-white focus:outline-none focus:ring md:px-8 md:py-3 md:text-lg">
            Post comment
          </button>
        </div>
      </div>
    </form>
  );
}
