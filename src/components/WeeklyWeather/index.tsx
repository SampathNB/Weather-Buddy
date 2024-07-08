import { Icons } from "@utils";
import { DayWeather } from "./DayWeather";
import { Swiper, SwiperSlide } from "swiper/react";
import { Day } from "./Day";

export const WeeklyWeather = () => {
  return (
    <div className="bg-white bg-opacity-10 p-5 px-7 rounded-[40px] w-1/3 flex flex-col">
      <Swiper
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
      </Swiper>
      <DayWeather />
    </div>
  );
};
