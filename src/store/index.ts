import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./apis";
import { weatherReducer } from "./slices";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    weatherDetails: weatherReducer,
  },
  middleware: (gDM) => gDM().concat(weatherApi.middleware),
});

export * from "./apis";
export * from "./slices";
