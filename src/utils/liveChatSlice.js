import { createSlice } from '@reduxjs/toolkit';
import { OFFSET_LIVE_CHAT } from './helper';

const liveChatSlice = createSlice({
  name: 'liveChat',
  initialState: {
    messages: [],
  },
  reducers: {
    setLiveChat: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { setLiveChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
