import React from 'react';
import './PopupSize.css'

export default function PopupSize(props) {

  const handleProdcutSize = (e) => {
    let product = props.productForBasket;
    product.size = e.target.value;
    props.setProductForBasket(product)
  }


  if(props.type == 'cap'){
    return (
      <div>
      </div>
    )
  }else if(props.type == 'cover'){
    return(
      <div>
        <select name="itemSize" onChange={handleProdcutSize} className="popup__select" id="itemSize">
             <option value="Iphone 7/8">Iphone 7/8</option>
             <option value="Iphone 7+/8+">Iphone 7+/8+</option>
             <option value="Iphone X/XS">Iphone X/XS</option>
             <option value="Iphone XS MAX">Iphone XS MAX</option>
             <option value="Iphone XR">Iphone XR</option>
             <option value="Iphone 11">Iphone 11</option>
             <option value="Iphone 11 Pro">Iphone 11 Pro</option>
             <option value="Iphone 11 Pro Max">Iphone 11 Pro Max</option>
             <option value="Iphone 12 Mini">Iphone 12 Mini</option>
            <option value="Iphone 12/12 Pro">Iphone 12/12 Pro</option>
             <option value="Iphone 12 Pro Max">Iphone 12 Pro Max</option>
             <option value="Iphone 13">Iphone 13</option>
             <option value="Iphone 13 Pro">Iphone 13 Pro</option>
             <option value="Iphone 13 Pro Max">Iphone 13 Pro Max</option>
             <option value="Iphone 14">Iphone 14</option>
             <option value="Iphone 14 Pro">Iphone 14 Pro</option>
             <option value="Iphone 14 Pro Max">Iphone 14 Pro Max</option>
             <option value="Інша модель">Інша модель</option>
            </select>
      </div>
    )
  }else{
    return (
      <div>
         <select name="itemSize" onChange={handleProdcutSize} className="popup__select" id="itemSize">
               <option value="XS">XS</option>
               <option value="S">S</option>
               <option value="M">M</option>
               <option value="L">L</option>
               <option value="XL">XL</option>
               <option value="XLL">XLL</option>
              </select>
      </div>
    )
  }
}
