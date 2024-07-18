import { skipToken } from "@reduxjs/toolkit/query";
import { useGetGeoCityDataQuery } from "@store";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export const useChangeCityHook = () => {
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

  const showPanelHandler = () => setShowPanel(true);
  const hidePanelHandler = () => setShowPanel(false);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    const sidebarOutSideClick = (e: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        hidePanelHandler();
      }
    };
    document.addEventListener("click", sidebarOutSideClick);
    return () => {
      document.removeEventListener("click", sidebarOutSideClick);
    };
  }, [showPanel]);

  const reset = () => {
    setCityValue("");
    hidePanelHandler();
    setShowSearchList(false);
  };

  return {
    cityData,
    cityValue,
    showSearchList,
    showPanel,
    sidebarRef,
    reset,
    searchCityHandler,
    hidePanelHandler,
    showPanelHandler,
  };
};
