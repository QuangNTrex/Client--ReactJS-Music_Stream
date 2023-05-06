import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChannelPage from "./pages/ChannelPage";
import { useEffect } from "react";
import { http } from "./libs/http";
import { useDispatch } from "react-redux";
import { ChannelActions } from "./store/channel";
import ChannelDetailPage from "./pages/ChannelDetailPage";
import Test from "./component/test";
import Layout from "./component/Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    http("/channel/channels")
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          return dispatch(
            ChannelActions.newChannels({ listChannel: data.result.channels })
          );
        } else {
          console.log(data.error);
        }
      });
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/channel" element={<ChannelPage />} />
        <Route path="/channel/:channelId" element={<ChannelDetailPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Layout>
  );
};

export default App;
