import './ProductsContainer.css';
import ProductsItem from '../ProductsItem/ProductsItem';
import React, { useState, useEffect } from "react";

function ProductsContainer({products, setProducts, popup, setPopup, popupCordinate, setPopupCordinate, productElem, setProductElem}) {
   
    const DisplayPopup = (e) => {
    // let target = e.target.closest('.productsItem__btn');
    if(e.target.getAttribute("class") == 'productsItem__btn'){
      let target = e.target
      let  clientY = e.clientY;
      let   paramsY = e.pageY;
      const cordinats = [clientY,paramsY]
      setPopupCordinate([...cordinats])
      setPopup(true);
      let targetId = target.id.substring(3) 
      let elem = products.filter(item => item._id == targetId);
      setProductElem(elem)
      console.log(elem)
    }
 }

 


  return (
    <div className="productsContainer" >
        <div className="productsList" onClick={DisplayPopup}>
        {products.map((item) => <ProductsItem popupCordinate={popupCordinate} setPopupCordinate={setPopupCordinate} popup={popup} setPopup={setPopup} key={item._id} img={item.img[0].image} _id={item._id} name={item.name} size={item.size} price={item.price} type={item.type} model={item.modelPhone} material={item.material}/>)}
        </div>
        <div className="productsContainer__btn">Завантажити ще</div>
    </div>
    
);
}

export default ProductsContainer;
