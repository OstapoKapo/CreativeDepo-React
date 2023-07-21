import './Swiper.css';
import slide1 from './img/swiper1_img1.png';
import slide2 from './img/swiper1_img2.png';
import slide3 from './img/swiper1_img3.png';
import slide4 from './img/swiper1_img4.png';
// import SwiperSlides from '../SwiperSlides/SwiperSlides'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/effect-fade";
// import required modules
import {Navigation, Pagination, EffectFade, Autoplay} from 'swiper';

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
         pagination={{
          clickable: true,
        }} 
         navigation = {true}
         disableOnInteraction={false} 
         modules={[Navigation,Pagination,Autoplay,EffectFade]} 
         style={{
            "--swiper-navigation-size": "60px",
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-bullet-horizontal-border": "3px solid #fff",
            "--swiper-pagination-bullet-inactive-color": "initial",
            "--swiper-pagination-bullet-size": "11px",
            "--swiper-pagination-bullet-horizontal-gap": "6px"
          }}
         >
        <SwiperSlide className='swiper__slide'>
          <img src={slide1} alt="" />  
        </SwiperSlide>  
        <SwiperSlide className='swiper__slide'>
          <img src={slide2} alt="" />  
        </SwiperSlide>   
        <SwiperSlide className='swiper__slide'>
          <img src={slide3} alt="" />  
        </SwiperSlide>   
        <SwiperSlide className='swiper__slide'>
          <img src={slide4} alt="" />  
        </SwiperSlide>  
        
      </Swiper>
    </div>
  );
}



export default SwiperPage1;