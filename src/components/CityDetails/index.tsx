import { Icons } from "@utils";

export const CityDetails = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <p className="flex items-center text-2xl gap-1 font-medium mb-9">
              {Icons.Location} <span className="mr-1">New York</span>{" "}
              {Icons.RightArrow}{" "}
            </p>
            <span className="text-5xl font-medium block">Cloudy</span>
          </div>
          <div className="mb-10">
            <span className="text-6xl font-medium block">26°C</span>
            <p className="text-lg">Sunday | 12 Dec 2023</p>
          </div>
        </div>
        <div className="aspect-square">
          {Icons.Cloud}
        </div>
      </div>
    </>
  );
};
