import { DayWeather } from "./DayWeather";

export const WeeklyWeather = () => {
  return (
    <div className="bg-white bg-opacity-10 xsm:p-5 p-3 xl:px-7 xl:rounded-[30px] md:rounded-2xl rounded-lg lg:w-1/3 flex flex-col relative overflow-hidden">
      <DayWeather />
      <svg
        className="absolute w-full h-auto left-0 top-1/3 opacity-25"
        width="222"
        height="136"
        viewBox="0 0 222 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.514679 48.2293C0.514679 48.2293 37.6353 22.2395 45.8086 21.666C53.3008 21.1402 104.725 58.446 104.725 58.446C104.725 58.446 148.656 1.91366 159.895 0.892021C171.133 -0.129623 221.195 33.5854 221.195 33.5854V135.752H0.514679V48.2293Z"
          fill="url(#paint0_linear_1_6509)"
          fillOpacity="0.4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_6509"
            x1="110.855"
            y1="0.869263"
            x2="110.855"
            y2="135.752"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4C3C1" />
            <stop offset="1" stopColor="#C4C3C1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
