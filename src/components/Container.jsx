import './Container.css';
import Header from './header/Header.jsx';
import Swiper from './Swiper/Swiper';
import Filter from './Filter/Filter';
import Prodcuts from './ProductsContainer/ProductsContainer'
import HelpUkraine from './HelpUkraine/HelpUkraine';
import Footer from './Footer/Footer';
import { useState, useEffect } from 'react';


function Container() {

  let [products, setProducts] = useState([]);

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
            <Prodcuts products={products} setProducts={setProducts}/>
            <HelpUkraine />
            <Footer />
    </div>
  );
}

export default Container;
