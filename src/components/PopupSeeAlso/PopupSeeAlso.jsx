import React from 'react';
import './PopupSeeAlso.css';

export default function PopupSeeAlso() {
  return (
    <div>
        <div className="seeAlso">
            <div className="seeAlso__header">ДИВІТЬСЯ ТАКОЖ:</div>
            <div className="popup__row">
               <div className="productsItem" id={'item1'}>
                  <img className='productsItem__img' src={'img/HoodieUkraine.png'}  alt="photo" />
                <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">Hoodie</p>
                    <p className="productsItem__size"><span>Модель:</span> XS,S,M,L,XL,XXL</p>
                    <p className="productsItem__size productsItem__material"><span>Матеріал:</span> dadasdasdasda</p>
                    <p className="productsItem__price">1 300</p>
                </div>
                <div className="productsItem__main__bottom">
                    <button className="productsItem__btn" id={'btn1'}>ДОДАТИ У КОШИК</button>
                </div>
                 </div>
              </div>

              <div className="productsItem" id={'item2'}>
                  <img className='productsItem__img' src={'img/HoodieUkraine.png'}  alt="photo" />
                <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">Hoodie</p>
                    <p className="productsItem__size"><span>Модель:</span> XS,S,M,L,XL,XXL</p>
                    <p className="productsItem__size productsItem__material"><span>Матеріал:</span> dadasdasdasda</p>
                    <p className="productsItem__price">1 300</p>
                </div>
                <div className="productsItem__main__bottom">
                    <button className="productsItem__btn" id={'btn3'}>ДОДАТИ У КОШИК</button>
                </div>
                 </div>
              </div>

              <div className="productsItem" id={'item3'}>
                  <img className='productsItem__img' src={'img/HoodieUkraine.png'}  alt="photo" />
                <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">Hoodie</p>
                    <p className="productsItem__size"><span>Модель:</span> XS,S,M,L,XL,XXL</p>
                    <p className="productsItem__size productsItem__material"><span>Матеріал:</span> dadasdasdasda</p>
                    <p className="productsItem__price">1 300</p>
                </div>
                <div className="productsItem__main__bottom">
                    <button className="productsItem__btn" id={'btn3'}>ДОДАТИ У КОШИК</button>
                </div>
                 </div>
              </div>

              <div className="productsItem" id={'item4'}>
                  <img className='productsItem__img' src={'img/HoodieUkraine.png'}  alt="photo" />
                <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">Hoodie</p>
                    <p className="productsItem__size"><span>Модель:</span> XS,S,M,L,XL,XXL</p>
                    <p className="productsItem__size productsItem__material"><span>Матеріал:</span> dadasdasdasda</p>
                    <p className="productsItem__price">1 300</p>
                </div>
                <div className="productsItem__main__bottom">
                    <button className="productsItem__btn" id={'btn4'}>ДОДАТИ У КОШИК</button>
                </div>
                 </div>
              </div>
            </div>
        </div>
    </div>
  )
}
