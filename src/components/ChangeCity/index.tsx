import { Icons } from "@utils";
import clsx from "clsx";
import { CityType } from "src/types";
import { useChangeCityHook } from "./ChangeCity.hook";

interface CityDetailType {
  getCityDetails: (city: CityType) => void;
}

export const ChangeCity = ({ getCityDetails }: CityDetailType) => {
  const {
    cityData,
    cityValue,
    showSearchList,
    showPanel,
    sidebarRef,
    reset,
    searchCityHandler,
    hidePanelHandler,
    showPanelHandler,
  } = useChangeCityHook();

  return (
    <>
      <div ref={sidebarRef}>
        <button
          type="button"
          onClick={showPanelHandler}
          className="bg-white md:p-2 p-1 md:px-4 px-2 text-black md:rounded-md rounded-sm font-medium md:text-base text-sm"
        >
          Change City
        </button>
        <div
          className={clsx(
            "fixed top-0 left-0 bg-white w-1/4 h-screen p-4 min-w-80 pt-9 text-black transition-transform z-50",
            { ["translate-x-0"]: showPanel, ["-translate-x-full"]: !showPanel }
          )}
        >
          <span
            className="inline-flex absolute top-3 right-3"
            role="button"
            onClick={hidePanelHandler}
          >
            {Icons.Close}
          </span>
          <div className="flex items-center py-6 justify-center">
            <div className="border-r border-gray-300 flex-shrink-0 w-1/3 px-6">
              {Icons.City}
            </div>
            <div className=" flex-shrink-0 w-1/3 px-6">{Icons.Village}</div>
          </div>
          <div className="max-w-96 mx-auto p-4">
            <div className="flex flex-col">
              <input
                value={cityValue}
                onChange={searchCityHandler}
                placeholder="Search City or Village"
                type="search"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-theme transition-colors"
              />
              {showSearchList && (
                <div className="border border-gray-300 rounded-lg mt-2 text-sm overflow-hidden">
                  <ul>
                    {cityData?.map((city: CityType, index: number) => {
                      const lastItem = index == cityData.length - 1;
                      return (
                        <li
                          key={index}
                          className={clsx({
                            ["border-b border-gray-300"]: !lastItem,
                          })}
                        >
                          <button
                            className="py-2 px-4 w-full text-left bg-white hover:bg-gray-100 transition-colors"
                            onClick={() => {
                              getCityDetails(city);
                              reset();
                            }}
                          >
                            {city?.name}, {city?.region}, {city?.country}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
