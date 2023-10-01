import React from 'react';
import './PopupColor.css';

export default function PopupColor(props) {
 
  const filterImgHandle = (e) => {
   let target = e.target;
   if(target.classList.contains('popup__input')){
    let targetParent = target.closest('input');
    let productInfo = props.productElem.img[targetParent.getAttribute('data-action')];
    let product = props.productForBasket;
    product.image = productInfo.image;
    product.color = productInfo.color;
    props.setProductForBasket(product)
    props.swiper.current.swiper.slideTo(target.getAttribute('data-action'));
   }
  }
 
  return (
    <div>
            <div class="popup__row popup__row_color" onClick={filterImgHandle} >
             <label>
              <input type="radio" name="itemChooseInput"  value="" data-action={props.imgIndex} className="popup__input"/>
              <div className="popup__itemImg">
                <img src={'img/' + props.img} alt=""/>
              </div>
            <div className="popup__text">{props.color}</div>
             </label>
             </div>
    </div>
  )
}
