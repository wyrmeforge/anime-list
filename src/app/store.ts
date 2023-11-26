import { configureStore } from '@reduxjs/toolkit';
import HomePageSlice from "./containers/HomePage/homePageSlice";

export const store = configureStore({
  reducer: {
    homePage: HomePageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
