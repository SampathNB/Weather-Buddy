import { skipToken } from "@reduxjs/toolkit/query";
import { getWeatherData, useGetCurrentWeatherQuery } from "@store";
import { CityType } from "@types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useCityWeatherDetails = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string | symbol | undefined>(
    skipToken
  );
  const { data: weatherData, isLoading } = useGetCurrentWeatherQuery(location);

  let id: number;
  const successGeoLocation = (position: GeolocationPosition) => {
    let locationData =
      position?.coords?.latitude + "," + position?.coords?.longitude;
    setLocation(locationData);
    navigator.geolocation.clearWatch(id);
  };

  useEffect(() => {
    id = navigator.geolocation.watchPosition((position: GeolocationPosition) =>
      successGeoLocation(position)
    );
  }, [navigator.geolocation]);

  useEffect(() => {
    setLocation("mumbai-maharashtra-india");
  }, []);

  const getCityDetails = (city: CityType) => {
    setLocation(city.url);
  };

  useEffect(() => {
    dispatch(getWeatherData({ weatherData, isLoading }));
  }, [isLoading, weatherData]);

  return {
    weatherData,
    getCityDetails,
  };
};
