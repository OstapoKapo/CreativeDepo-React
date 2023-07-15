import './Container.css';
import Header from './header/Header.jsx';
import Swiper from './Swiper/Swiper';
import Filter from './Filter/Filter';
import Prodcuts from './ProductsContainer/ProductsContainer'

function Container() {
  return (
    <div className="main">
            <Header />
            <Swiper />
            <Filter />
            <Prodcuts />
    </div>
  );
}

export default Container;
