export default function Header() {


  return (
    <>
      {/* <!-- Sticky Navbar with Dropdown --> */}
      <nav className="fixed z-10 w-full bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex flex-shrink-0 items-center">
                <img
                  className="h-9 w-auto"
                  src="/baked-cake-cup.svg"
                  alt="Logo"
                />
                <span className="ml-3 text-xl font-bold text-pink-600">
                  Cooking Blog
                </span>
              </a>

            </div>

            <div className="flex items-center">
              <div className="hidden md:ml-4 md:flex md:items-center">
                <div className="flex justify-between gap-3">
                  <button className="rounded-md px-4 py-2 text-sm font-medium text-pink-400 hover:ring-1 hover:ring-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400 focus:ring-offset-1">
                    Login
                  </button>
                  <button className="rounded-md bg-pink-400 px-4 py-2 text-sm font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 focus:ring-offset-1">
                    Sign up
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      {/* 
      <!-- Page content --> */}
      {/* <div className="bg-fuchsia-50 pt-16">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex h-96 items-center justify-center rounded-lg border-4 border-dashed border-gray-200">
              <p className="text-xl text-gray-500">Page Content Goes Here</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
