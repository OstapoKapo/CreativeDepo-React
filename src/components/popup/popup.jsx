import React from 'react';
import './Popup.css';
import PopupColor from '../PopupColor/PopupColor';
import PopupSize from '../PopupSize/PopupSize'
import Close from './img/popapBtnCancel.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper';


export default function popup() {
  return (
    <div className='popup'>
      <div className="popup__row popup__row_cancel">
        <div className="popup__closeBtn"><img src={Close} alt="Close" /></div>
      </div>
      <div className="popup__container">
        <div className="popup__main">
          <div className="popup__main__left">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper popup__swiper" 
               loop={true} 
               effect={"fade"} 
               style={{
                "--swiper-navigation-size": "60px",
              }}
               >
                <SwiperSlide className='popup__swiper__slide'>
                    <img src='img/hoodieUkraine.png' alt="" />
                </SwiperSlide>
                <SwiperSlide className='popup__swiper__slide'>
                    <img src='img/hoodieUkraine.png' alt="" />
                </SwiperSlide>
                <SwiperSlide className='popup__swiper__slide'>
                    <img src='img/hoodieUkraine.png' alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="popup__row popup__row_swiper">
                <div className="popup__swiper__img">
                  <img src="img/hoodieUkraine.png" alt="" />
                </div>
                <div className="popup__swiper__img">
                  <img src="img/hoodieUkraine.png" alt="" />
                </div>
                <div className="popup__swiper__img">
                  <img src="img/hoodieUkraine.png" alt="" />
                </div>
              </div>
          </div>
          <div className="popup__main__right">
            <div className="popup__header">ФУТБОЛКА IM UKRAINIAN</div>
            <div className="popup__text">Код товару: 450834361112</div>
            <div className="popup__price">1 200 грн.</div>
            <div className="popup__text">Колір</div>
            <PopupColor key={1} img={'hoodieUkraine.png'} color={'чорний'}/>
            <PopupColor key={2} img={'hakiHoodieUkraine.jpg'} color={'Хакі'}/>
            <div className="popup__text">Розмір</div>
            <PopupSize />
          </div>
        </div>
      </div>
    </div>
  )
}
// $('#popap').css('top',`${pageY-clientY}px`)