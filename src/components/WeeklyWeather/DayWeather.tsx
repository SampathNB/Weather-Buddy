import { formatTemperature, Icons } from "@utils";
import { useSelector } from "react-redux";
import { WeatherCondition } from "../WeatherCondition";

export const DayWeather = () => {
  const weather = useSelector((state: any) => state.weatherDetails);
  const weatherData = weather?.weatherData?.weatherData;
  return (
    <>
      <div className="flex flex-col h-full relative z-10">
        <p className="flex items-center md:text-xl text-lg gap-1 font-medium mb-5">
          AIR Conditions
        </p>
        <div className="lg:flex flex-col justify-between h-full lg:gap-3 gap-5 lg:mb-4 grid md:grid-cols-3 xsm:grid-cols-2">
          <WeatherCondition
            icon={Icons.Temperature}
            condition="Real Feel"
            result={formatTemperature(weatherData?.current?.feelslike_c)}
          />
          <WeatherCondition
            icon={Icons.Wind}
            condition="Wind"
            result={
              weatherData?.current?.wind_mph +
              " m/s " +
              weatherData?.current?.wind_dir
            }
          />
          <WeatherCondition
            icon={Icons.Drop}
            condition="Chances of rain"
            result={
              weatherData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain +
              " %"
            }
          />
          <WeatherCondition
            icon={Icons.Sun}
            condition="UV Index"
            result={weatherData?.current?.uv}
          />
        </div>
      </div>
    </>
  );
};
