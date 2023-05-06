import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playing: false,
  videoDetail: "",
  indexOfVideo: 0,
  channelTitle: "",
  channelId: "",
};

const PlayerControllerSlice = createSlice({
  initialState,
  name: "playerController",
  reducers: {
    addPlay: (state, action) => {
      state.playing = true;
      state.videoDetail = action.payload.videoDetail;
      state.indexOfVideo = action.payload.indexOfVideo;
      state.channelTitle = action.payload.channelTitle;
      state.channelId = action.payload.channelId;
    },
    resetPlay: (state) => {
      state.playing = false;
    },
  },
});

export default PlayerControllerSlice.reducer;
export const PlayerControllerActions = PlayerControllerSlice.actions;
