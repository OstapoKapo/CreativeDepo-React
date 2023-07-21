import React from 'react';
import './HelpUkraine.css';
import slide1 from './img/swiper2_img1.png';
import slide2 from './img/swiper2_img2.png';
import slide3 from './img/swiper2_img3.png';
import slide4 from './img/swiper2_img4.png';
import slide5 from './img/swiper2_img5.png';
import slide6 from './img/swiper2_img6.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper';


export default function HelpUkraine() {
  return (
    <div className="helpUkraine">
        <div className="helpUkraine__row">
            <div className="helpUkraine__row__left">
                <div className="helpUkraine__row__block"></div>
            </div>
            <div className="helpUkraine__row__right">
                <div className="helpUkraine__row__block"></div>
            </div>
        </div>
        <div className="helpUkraine__main">
            <div className="helpUkraine__main__left">
                <p className="helpUkraine__header">Як саме ти допомогаєш <br /> Україні, купуючи мерч:</p>
                <div className="helpUkraine__block helpUkraine__block_blue">Частину прибутку витрачаємо на потреби ЗСУ</div>
                <div className="helpUkraine__block helpUkraine__block_yellow">Тут є фото бронежилетів, які були виготовлені завдяки вашим замовленням. <br /> <br />  Плити 4 класу, покриті протисколковим та демпферним покриттям. Плитоноска важить 1,5 кг + 2 плити по 3кг, загалом — 7,5 кг, що є досить комфортним для тривалого використання військовими.</div>
            </div>
            <div className="helpUkraine__main__right">
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper helpUkraine__swiper" 
               loop={true} 
               effect={"fade"} 
               style={{
                "--swiper-navigation-size": "60px",
              }}
               >
                <SwiperSlide className='helpUkraine__swiper__slide'>
                    <img src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='helpUkraine__swiper__slide'>
                    <img src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='helpUkraine__swiper__slide'>
                    <img src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='helpUkraine__swiper__slide'>
                    <img src={slide4} alt="" />
                </SwiperSlide>
                <SwiperSlide className='helpUkraine__swiper__slide'>
                    <img src={slide5} alt="" />
                </SwiperSlide>
                <SwiperSlide className='helpUkraine__swiper__slide'>
                    <img src={slide6} alt="" />
                </SwiperSlide>
              </Swiper>
               
            </div>
        </div>
    </div>
  )
}
