import './Container.css';
import Header from './header/Header.jsx';
import Swiper from './Swiper/Swiper';
import Filter from './Filter/Filter';
import Prodcuts from './ProductsContainer/ProductsContainer'

function Container() {
  return (
    <div className="main">
        <div className="main__container">
            <Header />
            <Swiper />
            <Filter />
        </div>
    </div>
  );
}

export default Container;
