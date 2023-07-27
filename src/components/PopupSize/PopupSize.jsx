import React from 'react';
import './PopupSize.css'

export default function PopupSize() {
  return (
    <div>
       <select name="itemSize" className="popap__select" id="itemSize">
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
