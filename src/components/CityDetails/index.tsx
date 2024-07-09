import { skipToken } from "@reduxjs/toolkit/query";
import { getWeatherData, useGetCurrentWeatherQuery } from "@store";
import { formatTemperature, Icons } from "@utils";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const CityDetails = () => {
  const [response, setResponse] = useState(skipToken);
  const dispatch = useDispatch();

  let responseData;

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      responseData = {
        lat: position?.coords?.latitude,
        lon: position?.coords?.longitude,
      };
      setResponse(responseData);
      console.log("responseData", responseData);
    });
  }, []);

  const { data, isLoading } = useGetCurrentWeatherQuery(response);

  useEffect(() => {
    dispatch(getWeatherData(data));
  }, [isLoading, data]);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <p className="flex items-center text-2xl gap-1 font-medium mb-9">
              {Icons.Location} <span className="mr-1">{data?.name}</span>
            </p>
            <span className="text-5xl font-medium block">
              {data?.weather[0]?.main}
            </span>
          </div>
          <div className="mb-10">
            <span className="text-6xl font-medium block">
              {formatTemperature(data?.main?.temp)}
            </span>
            <p className="text-lg">
              {moment.unix(data?.dt).format("dddd")} |{" "}
              {moment.unix(data?.dt).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="aspect-square">{Icons.Cloud}</div>
      </div>
    </>
  );
};
