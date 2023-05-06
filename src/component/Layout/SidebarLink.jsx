import { NavLink } from "react-router-dom";

const SidebarLink = ({ title, icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive
          ? "sidebar__navbar-link-active"
          : "sidebar__navbar-link";
      }}
    >
      <i className={`bi ${icon}`}></i>
      <p className="title">{title}</p>
    </NavLink>
  );
};

export default SidebarLink;
