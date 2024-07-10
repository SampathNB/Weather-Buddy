import { config } from "@config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (location) => ({
        method: "GET",
        url: `forecast.json?key=${config.API_KEY}&q=${location}&days=2&aqi=no&alerts=yes`,
      }),
    }),
    getGeoCityData: builder.query({
      query: (location) => ({
        method: "GET",
        url: `search.json?key=${config.API_KEY}&q=${location}`,
      }),
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetGeoCityDataQuery } = weatherApi;
