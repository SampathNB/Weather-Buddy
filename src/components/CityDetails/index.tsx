import { skipToken } from "@reduxjs/toolkit/query";
import { getWeatherData, useGetCurrentWeatherQuery } from "@store";
import { formatTemperature, Icons } from "@utils";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeCity } from "../ChangeCity";
import { CityType } from "src/types";

export const CityWeatherDetails = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string | symbol>(skipToken);
  const { data, isLoading } = useGetCurrentWeatherQuery(location);

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      console.log(position);
      let locationData =
        position?.coords?.latitude + "," + position?.coords?.longitude;
      setLocation(locationData);
    });
  }, [navigator.geolocation]);

  const getCityDetails = (city: CityType) => {
    console.log(city);
    setLocation({ lat: city.lat, lon: city.lon });
  };

  useEffect(() => {
    dispatch(getWeatherData(data));
    console.log(data);
  }, [isLoading, data]);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 mb-9">
              <p className="text-2xl font-medium flex gap-1 ">
                {Icons.Location}{" "}
                <span className="mr-1">
                  {data?.location?.name}, {data?.location?.region},{" "}
                  {data?.location?.country}
                </span>
              </p>
              <ChangeCity getCityDetails={getCityDetails} />
            </div>
            <span className="text-5xl font-medium block">
              {data?.current?.condition?.text}
            </span>
          </div>
          <div className="mb-10">
            <span className="text-6xl font-medium block">
              {formatTemperature(data?.current?.temp_c)}
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
