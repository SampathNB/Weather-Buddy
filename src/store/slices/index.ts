import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: {},
    isLoading: true,
  },
  reducers: {
    getWeatherData: (state, action) => {
      state.weatherData = action.payload.data;
      state.isLoading = action.payload?.isLoading;
    },
  },
});

export const weatherReducer = weatherSlice.reducer;

export const { getWeatherData } = weatherSlice.actions;
