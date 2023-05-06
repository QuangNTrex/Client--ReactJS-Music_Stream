import "./Sidebar.css";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__heading">
        <h1 className="header">Music YTB</h1>
      </div>
      <div className="sidebar__navbar">
        <div className="sidebar__navbar-links">
          <SidebarLink
            path={"/channel"}
            title={"Channel"}
            icon={"bi-music-note-list"}
          />
          <SidebarLink
            path={"/library"}
            title={"Library"}
            icon={"bi-collection-play"}
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
