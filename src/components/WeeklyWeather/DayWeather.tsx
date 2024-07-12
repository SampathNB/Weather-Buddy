import { useSelector } from "react-redux";
import { WeatherCondition } from "../WeatherCondition";
import { formatTemperature, Icons } from "@utils";

export const DayWeather = () => {
  const weather = useSelector((state: any) => state.weatherDetails);
  return (
    <>
      <div className="flex flex-col h-full relative z-10">
        <p className="flex items-center text-xl gap-1 font-medium mb-5">
          AIR Conditions
        </p>
        <div className="flex flex-col justify-between h-full gap-3 mb-4">
          <WeatherCondition
            icon={Icons.Temperature}
            condition="Real Feel"
            result={
              weather &&
              formatTemperature(weather?.weatherData?.current?.feelslike_c)
            }
          />
          <WeatherCondition
            icon={Icons.Wind}
            condition="Wind"
            result={
              weather?.weatherData?.current?.wind_mph +
              " m/s " +
              weather?.weatherData?.current?.wind_dir
            }
          />
          <WeatherCondition
            icon={Icons.Drop}
            condition="Chances of rain"
            result={
              weather?.weatherData?.forecast?.forecastday[0]?.day
                ?.daily_chance_of_rain + " %"
            }
          />
          <WeatherCondition
            icon={Icons.Sun}
            condition="UV Index"
            result={weather?.weatherData?.current?.uv}
          />
        </div>
      </div>
    </>
  );
};
