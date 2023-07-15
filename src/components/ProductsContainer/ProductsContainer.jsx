import './ProductsContainer.css';
import ProductsItem from '../ProductsItem/ProductsItem';
import React, { useState, useEffect } from "react";

let productsArr =[]

function ProductsContainer() {

    const [products, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.products)
        productsArr = data.products
      }
      );
  }, []);  

  return (
    <div className="productsContainer">
        {productsArr.map((item) => <ProductsItem key={item._id} img={item.img[0].image} _id={item._id} name={item.name} size={item.size} price={item.price} type={item.type} model={item.modelPhone} material={item.material}/>)}
    </div>
);
}

export default ProductsContainer;
