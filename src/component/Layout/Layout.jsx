import Content from "./Content";
import "./Layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PlayerController from "../PlayerController/PlayerController";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const playing = useSelector((state) => state.playerController.playing);
  return (
    <div className="Layout">
      <div className={`Layout--top`}>
        <Sidebar />
        <div
          className={`Layout--top-right ${
            playing && "Layout--top-right-playing"
          }`}
        >
          <Header />
          <Content>{props.children}</Content>
        </div>
      </div>
      <div className={`Layout--bottom ${!playing && "hidden"}`}>
        <PlayerController />
      </div>
    </div>
  );
};
export default Layout;
