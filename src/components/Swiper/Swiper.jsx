import './Swiper.css';
import SwiperSlides from '../SwiperSlides/SwiperSlides'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
// import required modules
import { Navigation, Pagination, EffectFade, Autoplay, A11y} from 'swiper';

let slides = [
    {img:0},
    {img:1},
    {img:2}
]
function SwiperPage1(){
  return (
    <div className='containerSwiper'>
      <Swiper 
         className='swiper'
         navigation={{ 
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
         }}
         loop={true} 
         effect={"fade"} 
         autoplay={{delay: 3000}} 
         pagination={{clickable: true}} 
         navigation = {true}
         disableOnInteraction={false} 
         modules={[Navigation,Pagination,Autoplay,EffectFade]} 
         style={{
            "--swiper-navigation-size": "60px",
          }}
         >
        {slides.map((item) => <SwiperSlides key={item.img} img={item.img} />)}
      </Swiper>
    </div>
  );
}



export default SwiperPage1;