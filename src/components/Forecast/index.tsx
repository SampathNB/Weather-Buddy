import { Icons } from "@utils";

export const Forecast = () => {
  return (
    <div className="bg-white bg-opacity-10 p-5 px-7 rounded-[40px] w-2/3">
      <p className="flex items-center text-xl gap-1 font-medium mb-9">
        {Icons.Time} <span>24-hour forecast</span>
      </p>
    </div>
  );
};
