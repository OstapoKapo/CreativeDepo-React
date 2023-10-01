import React from 'react';
import './BasketBtn.css';
import Basket from './img/basket.png';

export default function BasketBtn({basketAmount, setBasketAmount}) {
  return (
    <div className="basketBtn__container" style={{display: basketAmount>0 ? 'flex' : 'none'}}>
        <div className="basketBtn">
          <img src={Basket} alt="Basket" />
          <div className="basketBtn__amount">{basketAmount}</div>
        </div>
    </div>
  )
}
