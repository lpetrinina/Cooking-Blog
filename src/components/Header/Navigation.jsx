import { NavLink } from "react-router";

export default function Navigation({ navigation, navStyles }) {
  console.log(navStyles);

  return (
    <>
      <div className="md:ml-6 md:flex md:space-x-8">
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
