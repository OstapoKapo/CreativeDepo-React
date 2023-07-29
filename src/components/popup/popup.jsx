import React from 'react';
import './Popup.css';
import PopupColor from '../PopupColor/PopupColor';
import PopupSize from '../PopupSize/PopupSize';
import PopupSeeAlso from '../PopupSeeAlso/PopupSeeAlso';
import Close from './img/popapBtnCancel.png';
import Minus from './img/minus.png';
import Plus from './img/plus.png'
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
            <div className="popup__text popup__text_margin">Розмір</div>
            <PopupSize key={1} type={'t-shirt'}/>
            <div className="popup__row popup__row_btn">
            <div className="popup__itemAmount">
             <div className="popup__itemAmount__symbol minusItemAmount">
               <img className="popup__itemAmount__minus " src={Minus} alt="minus"/>
             </div>
             <div className="popup__itemAmount__text itemAmount">1</div>
             <div className="popup__itemAmount__symbol popap__itemAmount_plus plusItemAmount">
               <img className="popup__itemAmount__plus" src={Plus} alt="plus"/>
             </div>
           </div>
           <div className="popup__basketBtn">ДОДАТИ У КОШИК</div>
            </div>
            <div className="popup__text"><span>Розмір: </span> XS, S, M, L, XL, XXL</div>
            <div className="popup__text"><span>Кольори: </span>  чорний, хакі</div>
            <div className="popup__text"><span>Тканина: </span> чорний - 3-х нитка, діагональ, без утеплення</div>
            <div className="popup__text"><span>Щільність: </span>  чорний - 380 г/м2</div>
            <div className="popup__text"><span>Присутня липучка під шеврон на рукаві</span></div>
            <div className="popup__text popup__text_idea">Ідея зробити такий принт посіла у наші голови щойно ми вирішили створити Українську колекцію. Уявляємо, як після перемоги будемо подорожувати світом у такій футболці або худі, і тим надписом все буде сказано!</div>
            <div className="popup__text"><span>Купуючи цей мерч, ти:</span></div>
            <div className="popup__row popup__row_instruction">
              <div className="popup__circle"></div>
              <div className="popup__text">Допомагаєш ЗСУ (частина від прибутку)</div>
            </div>
            <div className="popup__row popup__row_instruction">
              <div className="popup__circle"></div>
              <div className="popup__text">Забезпечуєш роботою українців, пов'язаних з виробництвом</div>
            </div>
            <div className="popup__row popup__row_instruction">
              <div className="popup__circle"></div>
              <div className="popup__text">Допомагаєш функціонувати та сплачувати податки малому бізнесу — розвиваєш економіку країни</div>
            </div>
            <div className="popup__row popup__row_instruction">
              <div className="popup__circle"></div>
              <div className="popup__text">Отримуєш класнючий мерч, заряджений на козацький драйв та перемогу</div>
            </div>
          </div>
        </div>
        <PopupSeeAlso />
      </div>
    </div>
  )
}
// $('#popap').css('top',`${pageY-clientY}px`)