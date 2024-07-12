import { CityWeatherDetails, Forecast, WeeklyWeather } from "@components";
import Loader from "./assets/json/loader.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <div className="p-14 bg-[#D69E36] h-screen overflow-auto text-white font-inter">
        <div className="container gap-10 flex flex-col mx-auto h-full">
          <div className="flex flex-row justify-between">
            <CityWeatherDetails />
          </div>
          <div className="flex gap-10 h-full">
            <WeeklyWeather />
            <Forecast />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
