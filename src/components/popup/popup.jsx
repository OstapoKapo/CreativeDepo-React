import React, {useState, useEffect, useRef } from 'react';
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


export default function Popup({popup, setPopup, popupCordinate, productElem, busketAmount, setBasketAmount, basketArr, setBasketArr}) {

let [productAmount, setProductAmount] = useState(1);



let [productForBasket, setProductForBasket] = useState(null);

useEffect(()=>{
 if(productElem !== null){
  let size = '';

  if(productElem.type === 'cover'){
    size = 'Iphone 7/8';
  }else if(productElem.type === 'cap'){
    size = 'one size';
  }else if(productElem.type === 't-shirt' || productElem.type === 'hoodie'){
    size = 'xs'
  }
    setProductForBasket({
      name:productElem.name,
    size: size,
    price:productElem.price,
    image:productElem.img[0].image,
    amount:1,
    color:productElem.img[0].color
    })
    setProductAmount(1)
  }
},[popup])

const closePopup = (e) => {
  setPopup(false)
}

const swiper = useRef(null);

const style = {
  display: popup ? 'flex' : 'none',
  top: popup ?  popupCordinate[1]-popupCordinate[0]+'px'  : 0
}; 


  useEffect(()  => {
  popup ? document.body.style.overflowY = 'hidden' :  document.body.style.overflowY = 'scroll';
    return () => {
      document.body.style.overflowY = 'scroll';
          };
  });

  const filterImgHandle = (e) => {
    let target = e.target;
    let targetParent = target.closest('.popup__swiper__img');
    let productInfo = productElem.img[targetParent.getAttribute('data-action')];
    swiper.current.swiper.slideTo(targetParent.getAttribute('data-action'));
  }

  const productAmountHandle = (e) => {
    let target = e.target;
    if(target.alt == 'plus'){
      setProductAmount(productAmount+1);
    }else if(target.alt == 'minus'){
      if(productAmount>1){
        setProductAmount(productAmount-1);
      }
    }
  }

  useEffect(()=>{
    if(productForBasket !== null){
      let product = productForBasket;
      product.amount = productAmount;
      setProductForBasket(product)
    }
  },[productAmount]);

  const addProductHandle = (e) => {
    let arr = [...basketArr];
    console.log(basketArr)
   if(!arr.includes(productForBasket)){
    arr.push(productForBasket);
    setBasketArr(arr);
    setBasketAmount(arr.length);
   }
   else{
    console.log('err')
   }
  }
  
  

  return (
    <div className='popup' style={style}>
      <div className="popup__row popup__row_cancel">
        <div className="popup__closeBtn"><img src={Close} alt="Close" onClick={closePopup}/></div>
      </div>
      <div className="popup__container">
        <div className="popup__main">
          <div className="popup__main__left">
            <Swiper ref={swiper} navigation={true} modules={[Navigation]} className="mySwiper popup__swiper" 
               loop={true} 
               effect={"fade"} 
               style={{
                "--swiper-navigation-size": "60px",
              }}
               >
                 {productElem !== null ?  productElem.img.map((item) => (
                    <SwiperSlide className='popup__swiper__slide'>
                      <img src={'img/' + item.image} alt="" />
                    </SwiperSlide>
                 )) : '' }
               
              </Swiper>
              <div className="popup__row popup__row_swiper">
              {productElem !== null ?  productElem.img.map((item) => (
                     <div className="popup__swiper__img" onClick={filterImgHandle} data-action={item.number}>
                     <img src={'img/' + item.image} alt="" />
                   </div>
                 )) : ''}
              </div>
          </div>
          <div className="popup__main__right">
            <div className="popup__header">{productElem !== null ? productElem.name : ''}</div>
            <div className="popup__text">Код товару: 450834361112</div>
            <div className="popup__price">1 200 грн.</div> 
            <div className="popup__text">Колір</div>
            {productElem !== null ?  productElem.img.map((item) => (
             <PopupColor  productElem={productElem} productForBasket={productForBasket} setProductForBasket={setProductForBasket} imgIndex={item.number} swiper={swiper} key={item.number} img={item.image} color={item.color}/>
            )) : ''}
            { productElem !== null ?  productElem.type == 'cap' ? '' : <div className="popup__text popup__text_margin">Розмір</div> : ''}
             {productElem !== null ? <PopupSize productForBasket={productForBasket} setProductForBasket={setProductForBasket} key={productElem._id} type={productElem.type}/> : ''}
            <div className="popup__row popup__row_btn">
            <div className="popup__itemAmount " onClick={productAmountHandle}>
             <div className="popup__itemAmount__symbol minusItemAmount">
               <img className="popup__itemAmount__minus " src={Minus} alt="minus"/>
             </div>
             <div className="popup__itemAmount__text itemAmount">{productAmount}</div>
             <div className="popup__itemAmount__symbol popap__itemAmount_plus plusItemAmount">
               <img className="popup__itemAmount__plus" src={Plus} alt="plus"/>
             </div>
           </div>
           <div className="popup__basketBtn" onClick={addProductHandle}>ДОДАТИ У КОШИК</div>
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
            {/* {console.log(randomElements)} */}
            {/* {randomElements.map((item) => <PopupSeeAlso key={item._id} id={item._id} img={item.img[0].image} name={item.name} size={item.size} material={item.material} price={item.price} />)} */}
            </div>
        </div>
      </div>
    </div>
  )
}
