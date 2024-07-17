import { skipToken } from "@reduxjs/toolkit/query";
import { getWeatherData, useGetCurrentWeatherQuery } from "@store";
import { formatTemperature, Icons } from "@utils";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ChangeCity } from "../ChangeCity";
import { CityType } from "src/types";
import { Skeleton } from "../Skeleton";

export const CityWeatherDetails = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string | symbol | undefined>(
    skipToken
  );
  const { data, isLoading } = useGetCurrentWeatherQuery(location);

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
    dispatch(getWeatherData({ data, isLoading }));
  }, [isLoading, data]);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between 3xl:gap-5 gap-2">
          <div>
            <div className="flex items-center gap-3 3xl:mb-9 mb-5">
              <p className="3xl:text-2xl text-xl font-medium flex gap-1 ">
                {Icons.Location}{" "}
                <span className="mr-1">
                  {data?.location?.name}, {data?.location?.region},{" "}
                  {data?.location?.country}
                </span>
              </p>
              <ChangeCity getCityDetails={getCityDetails} />
            </div>
            <div className="flex items-center gap-4">
              <span className="3xl:text-5xl text-4xl font-medium block">
                {data?.current?.condition?.text}
              </span>
              {data?.current?.condition?.icon && (
                <img
                  src={data?.current?.condition?.icon}
                  alt={data?.current?.condition?.text}
                />
              )}
            </div>
          </div>
          <div className="">
            <span className="3xl:text-6xl text-5xl font-medium block">
              {formatTemperature(data?.current?.temp_c)}
            </span>
            <p className="text-lg">
              {moment.unix(data?.current?.last_updated_epoch).format("dddd")} |{" "}
              {moment
                .unix(data?.current?.last_updated_epoch)
                .format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
