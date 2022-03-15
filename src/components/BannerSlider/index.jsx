import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay]);

export default function BannerSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="flex shadow-md rounded-lg w-full bg-slate-700 h-[18rem] sm:h-[23rem]  md:h-[28rem]"
      >
        <SwiperSlide>
          <div className="w-full h-full">
            <Image src="/img/img4.jpg" layout="fill" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full rounded-lg shadow-md">
            <Image className="rounded-lg" src="/img/img4.jpg" layout="fill" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
