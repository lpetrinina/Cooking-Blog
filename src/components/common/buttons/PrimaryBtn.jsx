export default function PrimaryBtn({ children }) {
  return (
    <button className="w-full items-center rounded-md bg-pink-400 px-6 py-2 text-sm font-medium leading-6 text-white ring-pink-400 ring-offset-1 transition duration-150 ease-in-out hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-1 md:px-6 md:py-2 md:text-base">
      {children}
    </button>
  );
}
