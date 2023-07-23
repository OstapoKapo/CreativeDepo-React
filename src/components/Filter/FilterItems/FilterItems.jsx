import './FilterItems.css';
import { useRef, useState } from 'react';


function FilterItems(props,{products, setProducts}) {

  const filterClick = (e) => {
   let target = e.target.closest('div div');
   for (const child of props.parent.current.childNodes) {
     if(true){
      child.classList.remove('filter__item_active')
     }
    }
    target.classList.add('filter__item_active');
  }

  return (
    <div className={props.class} onClick={filterClick} data-action={props.dataAction}>
       <p className="filter__item__p">{props.text}</p>
    </div>
  );
  }

export default FilterItems;