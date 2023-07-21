import React from 'react';
import './HelpUkraine.css';


export default function HelpUkraine() {
  return (
    <div className="helpUkraine">
        <div className="helpUkraine__row">
            <div className="helpUkraine__row__left">
                <div className="helpUkraine__row__block"></div>
            </div>
            <div className="helpUkraine__row__right">
                <div className="helpUkraine__row__block"></div>
            </div>
        </div>
        <div className="helpUkraine__main">
            <div className="helpUkraine__main__left">
                <p className="helpUkraine__header">Як саме ти допомогаєш <br /> Україні, купуючи мерч:</p>
                <div className="helpUkraine__block helpUkraine__block_blue">Частину прибутку витрачаємо на потреби ЗСУ</div>
                <div className="helpUkraine__block helpUkraine__block_yellow">Тут є фото бронежилетів, які були виготовлені завдяки вашим замовленням. <br /> <br />  Плити 4 класу, покриті протисколковим та демпферним покриттям. Плитоноска важить 1,5 кг + 2 плити по 3кг, загалом — 7,5 кг, що є досить комфортним для тривалого використання військовими.</div>
            </div>
            <div className="helpUkraine__main__right">
                <div className="helpUkraine__swiper"></div>
            </div>
        </div>
    </div>
  )
}
