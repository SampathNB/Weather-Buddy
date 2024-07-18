import { useMediaQuery } from "@hooks";
import { formatTemperature, Icons } from "@utils";
import moment from "moment";
import { ChangeCity } from "../ChangeCity";
import { useCityWeatherDetails } from "./CityWeatherDetails.hook";

export const CityWeatherDetails = () => {
  const mobile = useMediaQuery("(max-width: 420px)");
  const { getCityDetails, weatherData } = useCityWeatherDetails();
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between 3xl:gap-5 gap-2">
          <div>
            <div className="flex xsm:items-center gap-5 3xl:mb-9 md:mb-5 mb-3 xsm:flex-row flex-col-reverse">
              <p className="3xl:text-2xl text-xl font-medium flex gap-1 opacity-60">
                {Icons.Location}{" "}
                <span className="mr-1">
                  {weatherData?.location?.name}, {weatherData?.location?.region}
                  , {weatherData?.location?.country}
                </span>
              </p>
              <ChangeCity getCityDetails={getCityDetails} />
            </div>
            <div className="flex items-center gap-4">
              <span className="3xl:text-5xl md:text-4xl text-xl font-medium block">
                {weatherData?.current?.condition?.text}
              </span>
              {weatherData?.current?.condition?.icon && (
                <img
                  width={mobile ? 50 : 64}
                  height={mobile ? 50 : 64}
                  src={weatherData?.current?.condition?.icon}
                  alt={weatherData?.current?.condition?.text}
                />
              )}
            </div>
          </div>
          <div className="">
            <span className="3xl:text-6xl text-5xl font-medium block">
              {formatTemperature(weatherData?.current?.temp_c)}
            </span>
            <p className="md:text-lg text-base opacity-60">
              {moment
                .unix(weatherData?.current?.last_updated_epoch)
                .format("dddd")}{" "}
              |{" "}
              {moment
                .unix(weatherData?.current?.last_updated_epoch)
                .format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
