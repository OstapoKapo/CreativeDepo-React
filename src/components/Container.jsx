import './Container.css';
import Header from './header/Header.jsx';
import Swiper from './Swiper/Swiper';
import Filter from './Filter/Filter';
import Prodcuts from './ProductsContainer/ProductsContainer'
import HelpUkraine from './HelpUkraine/HelpUkraine';
import Footer from './Footer/Footer';
import Popup from './popup/popup';
import { useState, useEffect } from 'react';


function Container() {

  let [popup, setPopup] = useState(false);
  let [popupCordinate, setPopupCordinate] = useState([])
  let [products, setProducts] = useState([]);
  let [productElem, setProductElem] = useState([{}])
  let [randomElements, setRandomElements] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      }
      );
  }, []);  

  return (
    <div className="main">
            <Header />
            <Swiper />
            <Filter products={products} setProducts={setProducts}/>
            <Prodcuts randomElements={randomElements} setRandomElements={setRandomElements} productElem={productElem} setProductElem={setProductElem}  products={products} setProducts={setProducts} popup={popup} popupCordinate={popupCordinate} setPopupCordinate={setPopupCordinate} setPopup={setPopup}/>
            <HelpUkraine />
            <Footer />
            <Popup randomElements={randomElements} setRandomElements={setRandomElements} products={products} setProducts={setProducts} productElem={productElem} setProductElem={setProductElem} popupCordinate={popupCordinate} setPopupCordinate={setPopupCordinate} popup={popup} setPopup={setPopup}/>
    </div>
  );
}

export default Container;
