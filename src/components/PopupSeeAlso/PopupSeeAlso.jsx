import React from 'react';
import './PopupSeeAlso.css';

export default function PopupSeeAlso(props) {
    console.log(props.id)
  return (
    <div>
               <div className="productsItem" id={'popupItem'+props.id}>
                  <img className='productsItem__img' src={'img/' + props.img}  alt="photo" />
                <div className="productsItem__main">
                <div className="productsItem__main__top">
                    <p className="productsItem__name">{props.name}</p>
                    <p className="productsItem__size"><span>Модель:</span>{props.size}</p>
                    <p className="productsItem__size productsItem__material"><span>Матеріал:</span> {props.material}</p>
                    <p className="productsItem__price">{props.price+ ' грн.'}</p>
                </div>
                <div className="productsItem__main__bottom">
                    <button className="productsItem__btn" id={'popupBtn' + props.id}>ДОДАТИ У КОШИК</button>
                </div>
                 </div>
              </div>
    </div>
    
  )
}
