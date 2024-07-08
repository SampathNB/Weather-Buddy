import clsx from "clsx";
import { ReactNode } from "react";

type DayType = {
  name: string;
  weather: ReactNode;
  className?: string;
};

export const Day = ({ name, weather, className }: DayType) => {
  return (
    <div className={clsx("flex flex-col items-center", className)}>
      <span className="block">{name}</span>
      <span className="block">{weather}</span>
    </div>
  );
};
