const navigation = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "About", href: "/about" },
  { name: "Profile", href: "#" },
];

export default function Navigation() {
  return (
    <div className="hidden md:ml-6 md:flex md:space-x-8">
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-pink-500 px-1 pt-1 text-sm font-medium text-gray-900"
      >
        Home
      </a>
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-pink-300 hover:text-gray-700"
      >
        Recipes
      </a>
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-pink-300 hover:text-gray-700"
      >
        About
      </a>
      <a
        href="#"
        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-pink-300 hover:text-gray-700"
      >
        Profile
      </a>
    </div>

    // <div className="hidden md:ml-6 md:flex md:space-x-8">
    //   {navigation.map((item) => {
    //     <a
    //       key={item.name}
    //       href={item.href}
    //       className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
    //     >
    //       {item.name}
    //     </a>;
    //   })}
    // </div>
  );
}
