import { useState } from "react";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const navStyles = {
  activeStyle:
    "inline-flex items-center border-b-2 border-pink-500 px-1 pt-1 text-sm font-medium text-gray-900",
  hoverStyle:
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-pink-300 hover:text-gray-700",
};

const navigation = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "About", path: "/about" },
  { name: "Profile", path: "/profile" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  };

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

              {/* Main navigation */}
              <Navigation navigation={navigation} navStyles={navStyles} />
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

              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-pink-500"
                  aria-expanded={mobileMenuOpen}
                  onClick={toggleMobileMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state --> */}
        <div className={mobileMenuOpen ? "block" : "hidden"} id="mobile-menu">
          <MobileNavigation navigation={navigation} />
        </div>
      </nav>
    </>
  );
}
