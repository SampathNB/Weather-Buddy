import { useSelector } from "react-redux";
import { WeatherCondition } from "../WeatherCondition";
import { formatTemperature, Icons } from "@utils";

export const DayWeather = () => {
  const weather = useSelector((state: any) => state.weatherDetails);
  return (
    <>
      <div className="flex flex-col h-full">
        <p className="flex items-center text-xl gap-1 font-medium mb-5">
          AIR Conditions
        </p>
        <div className="flex flex-col justify-between h-full gap-3 mb-4">
          <WeatherCondition
            icon={Icons.Temperature}
            condition="Real Feel"
            result={
              weather &&
              formatTemperature(weather?.weatherData?.main?.feels_like)
            }
          />
          <WeatherCondition
            icon={Icons.Wind}
            condition="Wind"
            result={weather?.weatherData?.wind?.speed + "m/s"}
          />
          <WeatherCondition
            icon={Icons.Humidity}
            condition="Humidity"
            result={weather?.weatherData?.main?.humidity}
          />
          <WeatherCondition
            icon={Icons.Pressure}
            condition="Pressure"
            result={weather?.weatherData?.main?.pressure + "hPa"}
          />
        </div>
      </div>
    </>
  );
};
