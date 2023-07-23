import React from 'react';
import './Footer.css';
import InstIcon from './img/instIcon.png'
import TgIcon from './img/tgIcon.png'

export default function Footer() {

  return (
    <div className="footer">
      <p className="footer__text">Зв'яжіться з нами</p>
      <p className="footer__email">creativedepo.ua@gmail.com</p>
      <div className="footer__row">
        <div className="footer__btn footer__btn_red"><img src={InstIcon} alt="" /> CREATIV.DEPO</div>
        <div className="footer__btn footer__btn_blue"><img src={TgIcon} alt="" /> CREATIV.DEPO</div>
      </div>
      <ul className="footer__ul">
        <li className="footer__li">КАТАЛОГ</li>
        <li className="footer__li">ЗСУ</li>
        <li className="footer__li">ОПТ</li>
        <li className="footer__li">КОНТАКТИ</li>
      </ul>
      <div className="footer__row">
        <div className="footer__item">
          <div className="footer__item__header">ПРО CREATIVE DEPO</div>
          <p className="footer__text">про нас﻿</p>
          <p className="footer__text">умови використання</p>
        </div>
        <div className="footer__item">
        <div className="footer__item__header">ПОКУПЦЯМ</div>
          <p className="footer__text">доставка та оплата</p>
          <p className="footer__text">повернення та обмін</p>
        </div>
        <div className="footer__item"></div>
      </div>
    </div>
  )
}
