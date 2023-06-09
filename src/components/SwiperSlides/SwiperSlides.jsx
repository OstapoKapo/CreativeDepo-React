import './SwiperSlides.css';
import {SwiperSlide } from "swiper/react";
import slide1 from './img/swiper1_img1.png';
import slide2 from './img/swiper1_img2.png';
import slide3 from './img/swiper1_img3.png';
import slide4 from './img/swiper1_img4.png';

let slidesImgArr = [slide1,slide2,slide3,slide4];

function SwiperSlides(props){
  return(
       <SwiperSlide className='swiper__slide'>
          <img src={slidesImgArr[props.img]} alt="slide"/>
       </SwiperSlide>
  )
}
export default SwiperSlides;