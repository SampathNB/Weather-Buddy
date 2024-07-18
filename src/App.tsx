import { CityWeatherDetails, Forecast, WeeklyWeather } from "@components";

function App() {
  return (
    <>
      <div className="3xl:py-14 md:py-8 py-4 h-screen overflow-auto text-white font-inter">
        <div className="sm:container 3xl:gap-16 md:gap-10 gap-5 flex flex-col mx-auto lg:h-full px-3">
          <div className="flex flex-row justify-between">
            <CityWeatherDetails />
          </div>
          <div className="flex xl:gap-10 gap-6 lg:h-full lg:flex-row flex-col">
            <WeeklyWeather />
            <Forecast />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
