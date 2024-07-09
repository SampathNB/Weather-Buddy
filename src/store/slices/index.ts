import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: {},
  },
  reducers: {
    getWeatherData: (state, action) => {
      // console.log(state, action);
      state.weatherData = action.payload;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;

export const { getWeatherData } = weatherSlice.actions;
