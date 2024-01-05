import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
    videoList: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setVideoList: (state, action) => {
      state.videoList = action.payload;
    },
  },
});
export const { toggleMenu, setVideoList } = appSlice.actions;
export default appSlice;
