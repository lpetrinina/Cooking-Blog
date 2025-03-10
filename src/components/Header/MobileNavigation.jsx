export default function MobileNavigation() {
  return (
    <>
      <div className="space-y-1 pb-3 pt-2">
        <a
          href="#"
          className="block border-l-4 border-pink-500 bg-pink-50 py-2 pl-3 pr-4 text-base font-medium text-gray-900"
        >
          Home
        </a>
        <a
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-300 hover:bg-gray-50 hover:text-gray-700"
        >
          About
        </a>
        <a
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Services
        </a>
        <a
          href="#"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-pink-300 hover:bg-gray-50 hover:text-gray-700"
        >
          Contact
        </a>
      </div>

      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex flex-col items-center space-y-2 px-3">
          <a
            href="#"
            class="block w-full rounded-md bg-gray-100 px-3 py-2 text-center text-base font-medium text-pink-400"
          >
            Login
          </a>
          <a
            href="#"
            class="block w-full rounded-md bg-pink-400 px-3 py-2 text-center text-base font-medium text-white"
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}
