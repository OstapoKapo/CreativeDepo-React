import React from 'react';
import './PopupColor.css';

export default function PopupColor(props) {
  return (
    <div>
            <div class="popup__row popup__row_color">
             <label>
              <input type="radio" name="itemChooseInput" value="" data-action="" className="popup__input"/>
              <div className="popup__itemImg">
                <img src={'img/' + props.img} alt=""/>
              </div>
            <div className="popup__text">{props.color}</div>
             </label>
             </div>
    </div>
  )
}
