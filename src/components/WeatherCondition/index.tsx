import { ReactNode } from "react";

type WeatherCondition = {
  icon: ReactNode;
  condition: string;
  result: string;
};

export const WeatherCondition = ({
  icon,
  condition = "Real Feel",
  result,
}: WeatherCondition) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="opacity-60 ">{icon}</div>
      <div>
        <p className="md:text-lg text-base opacity-60 sm:mb-1">{condition}</p>
        <p>
          <b>{result}</b>
        </p>
      </div>
    </div>
  );
};
