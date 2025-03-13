import { NavLink } from "react-router";

export default function Navigation({ navigation }) {
  console.log(navStyles);

  return (
    <>
      <div className="hidden md:ml-6 md:flex md:space-x-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? navStyles.activeStyle : navStyles.hoverStyle
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}

const navStyles = {
  activeStyle:
    "inline-flex items-center border-b-2 border-pink-500 px-1 pt-1 text-sm font-medium text-gray-900",
  hoverStyle:
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-pink-300 hover:text-gray-700",
};
