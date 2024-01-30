import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMenuOpen: true,
    videoList: null,
    filtereDList: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setVideoList: (state, action) => {
      state.videoList = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filtereDList = action.payload;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, setVideoList, closeMenu, setFilteredList } =
  appSlice.actions;
export default appSlice;
