import { Icons } from "@utils";
import { DayWeather } from "./DayWeather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Day } from "./Day";

export const WeeklyWeather = () => {
  return (
    <div className="bg-white bg-opacity-10 p-5 px-7 rounded-[40px] w-1/3 flex flex-col relative">
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        centeredSlides
        className="w-full pb-5"
      >
        <SwiperSlide>
          <Day name="Sun" weather={Icons.Sun} />
        </SwiperSlide>
        <SwiperSlide>
          <Day name="Mon" weather={Icons.Sun} />
        </SwiperSlide>
        <SwiperSlide>
          <Day name="Tue" weather={Icons.Sun} />
        </SwiperSlide>
        <SwiperSlide>
          <Day name="Wed" weather={Icons.Sun} />
        </SwiperSlide>
        <SwiperSlide>
          <Day name="Thu" weather={Icons.Sun} />
        </SwiperSlide>
        <SwiperSlide>
          <Day name="Fri" weather={Icons.Sun} />
        </SwiperSlide>
        <SwiperSlide>
          <Day name="Sat" weather={Icons.Sun} />
        </SwiperSlide>
      </Swiper> */}
      <DayWeather />

      <svg
        className="absolute w-full h-auto left-0 bottom-0 opacity-65"
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
