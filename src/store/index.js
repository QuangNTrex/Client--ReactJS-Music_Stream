import { configureStore } from "@reduxjs/toolkit";
import ChannelReducer from "./channel";
import playerControllerReducer from "./player-controller";
const store = configureStore({
  reducer: {
    channel: ChannelReducer,
    playerController: playerControllerReducer,
  },
});

export default store;
