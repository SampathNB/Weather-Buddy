import { CityWeatherDetails, Forecast, WeeklyWeather } from "@components";

function App() {
  return (
    <>
      <div className="3xl:py-14 py-8 h-screen overflow-auto text-white font-inter">
        <div className="container 3xl:gap-16 gap-10 flex flex-col mx-auto h-full px-3">
          <div className="flex flex-row justify-between">
            <CityWeatherDetails />
          </div>
          <div className="flex xl:gap-10 gap-6 h-full">
            <WeeklyWeather />
            <Forecast />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
