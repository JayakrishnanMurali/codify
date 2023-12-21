import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./config-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      config: configSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
