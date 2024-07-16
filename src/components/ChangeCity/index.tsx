import { skipToken } from "@reduxjs/toolkit/query";
import { useGetGeoCityDataQuery } from "@store";
import { Icons } from "@utils";
import clsx from "clsx";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CityType } from "src/types";

interface CityDetailType {
  getCityDetails: (city: CityType) => void;
}

export const ChangeCity = ({ getCityDetails }: CityDetailType) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [cityValue, setCityValue] = useState<string>("");
  const [showSearchList, setShowSearchList] = useState<boolean>(false);
  const [term, setTerm] = useState<string | symbol>(skipToken);
  const [timeoutId, setTimeoutId] = useState<number | null | any>(null);

  const { data: cityData } = useGetGeoCityDataQuery(term);

  const searchCityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCityValue(value);
    clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        if (value.length > 0) {
          setTerm(value);
          setShowSearchList(true);
        } else {
          setShowSearchList(false);
        }
      }, 500)
    );
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    const sidebarOutSideClick = (e: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowPanel(false);
      }
    };
    document.addEventListener("click", sidebarOutSideClick);
    return () => {
      document.removeEventListener("click", sidebarOutSideClick);
    };
  }, [showPanel]);

  const reset = () => {
    setCityValue("");
    setShowPanel(false);
    setShowSearchList(false);
  };

  return (
    <>
      <div ref={sidebarRef}>
        <button
          type="button"
          onClick={() => setShowPanel(true)}
          className="bg-white p-2 text-black rounded-md font-medium"
        >
          Change City
        </button>
        <div
          className={clsx(
            "fixed top-0 left-0 bg-white w-1/4 h-screen p-4 min-w-80 pt-9 text-black transition-transform z-50",
            { ["translate-x-0"]: showPanel, ["-translate-x-full"]: !showPanel }
          )}
        >
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
