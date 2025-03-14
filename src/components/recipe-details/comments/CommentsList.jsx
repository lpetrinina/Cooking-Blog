import CreateComment from "./CreateComment";

export default function CommnetsList() {
  return (
    <div className="mt-5 bg-pink-100 p-12">
      <h2 className="mb-4 text-lg font-bold uppercase">Comments</h2>
      <div className="flex flex-col space-y-4">
        <div className="mb-4 rounded-sm bg-white p-4 shadow-md">
          <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
          <p className="mb-2 text-sm italic text-gray-700">
            Posted on April 17, 2023
          </p>
          <p className="text-gray-700">
            This is a sample comment. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          {/* Comment owner can edit and delete it */}
          <div class="mt-3 flex items-center gap-2">
            <button class="mr-2 flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <img src="/edit.svg" alt="Edit svg" className="w-5" />
              Edit
            </button>

            <button class="mr-2 flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <img src="/delete.svg" alt="Delete svg" className="h-5 w-5" />
              Delete
            </button>
          </div>
        </div>

        {/* Logged users can leave a comment */}
        <CreateComment />
      </div>
    </div>
  );
}
