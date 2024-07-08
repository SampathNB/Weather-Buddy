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
    <div className="flex gap-2">
      <div>{icon}</div>
      <div>
        <p className="">{condition}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};
