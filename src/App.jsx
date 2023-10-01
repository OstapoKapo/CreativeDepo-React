import './App.css'
import './nullstyle.css'
import Swiper from './components/Swiper/Swiper';
import Filter from './components/Filter/Filter';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import HelpUkraine from './components/HelpUkraine/HelpUkraine';
import Footer from './components/Footer/Footer';
import Popup from './components/popup/popup';
import Basket from './components/Basket/Basket';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import BasketBtn from './components/BasketBtn/BasketBtn';


function App() {

  let [basketAmount, setBasketAmount] = useState(0);
  let [basketArr, setBasketArr] = useState([])
  let [popup, setPopup] = useState(false);
  let [popupCordinate, setPopupCordinate] = useState([])
  let [products, setProducts] = useState([]);
  let [productElem, setProductElem] = useState(null)
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
            <BasketBtn basketAmount={basketAmount} setBasketAmount={setBasketAmount}/>
            <Basket basketArr={basketArr} setBasketArr={setBasketArr}/>
            <Swiper />
            <Filter products={products} setProducts={setProducts}/>
            <ProductsContainer randomElements={randomElements} setRandomElements={setRandomElements} productElem={productElem} setProductElem={setProductElem}  products={products} setProducts={setProducts} popup={popup} popupCordinate={popupCordinate} setPopupCordinate={setPopupCordinate} setPopup={setPopup}/>
            <HelpUkraine />
            <Footer />
            <Popup basketArr={basketArr} setBasketArr={setBasketArr} basketAmount={basketAmount} setBasketAmount={setBasketAmount} randomElements={randomElements} setRandomElements={setRandomElements} products={products} setProducts={setProducts} productElem={productElem} setProductElem={setProductElem} popupCordinate={popupCordinate} setPopupCordinate={setPopupCordinate} popup={popup} setPopup={setPopup}/>
    </div>
  );
}


export default App;

