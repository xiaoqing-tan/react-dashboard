import { createSlice } from "@reduxjs/toolkit";

type AsideProps = {
  drawerStatus: boolean,
  openedMenuList: string[]
}

export const aside = createSlice({
  name: "aside",
  initialState: {
    drawerStatus: true,
    openedMenuList: []
  } as AsideProps,
  reducers: {
    setDrawer: (state, action) => {
      state.drawerStatus = action.payload.drawerStatus;
    },
    setMenu: (state, action) => {
      state.openedMenuList = action.payload.openedMenuList;
    },
  },
});

export const { setDrawer, setMenu } = aside.actions;

export default aside.reducer;
