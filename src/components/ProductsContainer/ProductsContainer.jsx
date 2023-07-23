import './ProductsContainer.css';
import ProductsItem from '../ProductsItem/ProductsItem';
import React, { useState, useEffect } from "react";

function ProductsContainer({products, setProducts}) {

  return (
    <div className="productsContainer">
        <div className="productsList">
        {products.map((item) => <ProductsItem key={item._id} img={item.img[0].image} _id={item._id} name={item.name} size={item.size} price={item.price} type={item.type} model={item.modelPhone} material={item.material}/>)}
        </div>
        <div className="productsContainer__btn">Завантажити ще</div>
    </div>
    
);
}

export default ProductsContainer;
