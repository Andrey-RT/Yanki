import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import './Slider.css'
import Card1,{Card2,Card3,Card4} from './card/Card';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {
    return (
        <div>
           <Swiper
      // install Swiper modules
      modules={[Navigation  ]}
      spaceBetween={15}
      slidesPerView={4}
      navigation
    >
      <SwiperSlide><Card1 /></SwiperSlide>
      <SwiperSlide><Card2 /></SwiperSlide>
      <SwiperSlide><Card3 /></SwiperSlide>
      <SwiperSlide><Card4 /></SwiperSlide>
      <SwiperSlide><Card1 /></SwiperSlide>
      <SwiperSlide><Card2 /></SwiperSlide>
      <SwiperSlide><Card3 /></SwiperSlide>
      <SwiperSlide><Card4 /></SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Slider;