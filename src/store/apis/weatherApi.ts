import { config } from "@config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: (data) => ({
        method: "GET",
        url: `data/2.5/weather?lat=${data?.lat}&lon=${data?.lon}&appid=${config.API_KEY}&units=metric`,
      }),
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherApi;
