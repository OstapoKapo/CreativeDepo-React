import React, { useEffect } from 'react';
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


export default function Popup({popup, setPopup, popupCordinate, setPopupCordinate, productElem, setProductElem, products, setProducts, randomElements, setRandomElements}) {


const closePopup = (e) => {
  setPopup(false)
}


const style = {
  display: popup ? 'flex' : 'none',
  top: popup ?  popupCordinate[1]-popupCordinate[0]+'px'  : 0
}; 


  useEffect(()  => {
  popup ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll'
    return () => {
      document.body.style.overflowY = 'scroll';
          };
  });

  
  

  return (
    <div className='popup' style={style}>
      <div className="popup__row popup__row_cancel">
        <div className="popup__closeBtn"><img src={Close} alt="Close" onClick={closePopup}/></div>
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
                 { productElem[0].img?.map((item) => (
                    <SwiperSlide className='popup__swiper__slide'>
                      <img src={'img/' + item.image} alt="" />
                    </SwiperSlide>
                 ))}
               
              </Swiper>
              <div className="popup__row popup__row_swiper">
              { productElem[0].img?.map((item) => (
                     <div className="popup__swiper__img">
                     <img src={'img/' + item.image} alt="" />
                   </div>
                 ))}
              </div>
          </div>
          <div className="popup__main__right">
            <div className="popup__header">{productElem[0].name || 'dasdads'}</div>
            <div className="popup__text">Код товару: 450834361112</div>
            <div className="popup__price">1 200 грн.</div> 
            <div className="popup__text">Колір</div>
            { productElem[0].img?.map((item) => (
             <PopupColor key={item.color} img={item.image} color={item.color}/>
            ))}
            {productElem[0].type == 'cap' ? '' : <div className="popup__text popup__text_margin">Розмір</div>}
             <PopupSize key={productElem[0]._id} type={productElem[0].type}/>
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
        <div className="seeAlso">
            <div className="seeAlso__header">ДИВІТЬСЯ ТАКОЖ:</div>
            <div className="popup__row">
            {console.log(randomElements)}
            {/* {randomElements.map((item) => <PopupSeeAlso key={item._id} id={item._id} img={item.img[0].image} name={item.name} size={item.size} material={item.material} price={item.price} />)} */}
            </div>
        </div>
      </div>
    </div>
  )
}
