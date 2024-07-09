import { ChangeCity, CityDetails, Forecast, WeeklyWeather } from "@components";
import { useEffect } from "react";

function App() {
  return (
    <>
      <div className="p-14 bg-[#D69E36] h-screen overflow-auto text-white font-inter">
        <div className="container gap-10 flex flex-col mx-auto h-full">
          <div className="flex flex-row justify-between">
            <CityDetails />
            <ChangeCity />
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
