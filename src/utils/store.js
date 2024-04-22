import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import liveChatSlice from './liveChatSlice';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    search: searchSlice.reducer,
    liveChat: liveChatSlice,
  },
});
export default store;
