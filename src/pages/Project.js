import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Project.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import slide_image_1 from '../assets/images/wei1.jpg';
import slide_image_2 from '../assets/images/wei2.jpg';
import slide_image_3 from '../assets/images/wei3.jpg';
import slide_image_4 from '../assets/images/wei3-1.jpg';
import slide_image_5 from '../assets/images/wei3-2.jpg';
import slide_image_6 from '../assets/images/wei3-3.jpg';
import slide_image_7 from '../assets/images/teddy1.jpg';
import slide_image_8 from '../assets/images/teddy2.jpg';
import slide_image_9 from '../assets/images/teddy3.jpg';
import slide_image_10 from '../assets/images/yanwu1.jpg';
import slide_image_11 from '../assets/images/yanwu2.jpg';
import slide_image_12 from '../assets/images/yanwu3.jpg';

export default function Project() {
  return (
    <div>
      <h1>Gallary</h1>
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
        autoplay={{delay:1500}}
      >
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
