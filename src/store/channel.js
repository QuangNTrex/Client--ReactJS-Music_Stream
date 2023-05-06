import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listChannel: [],
};

const ChannelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    newChannels: (state, action) => {
      state.listChannel = action.payload.listChannel;
    },
  },
});

export default ChannelSlice.reducer;
export const ChannelActions = ChannelSlice.actions;
