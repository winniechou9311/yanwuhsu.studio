import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ServiceSwiper.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import service_image_1 from 'src/assets/images/person1.jpg';
import service_image_2 from 'src/assets/images/person2.jpg';
import service_image_3 from 'src/assets/images/person3.jpg';

export default function ServiceSwiper() {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{delay:2000}}
      >
        <SwiperSlide>
          <img src={service_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={service_image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={service_image_3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
