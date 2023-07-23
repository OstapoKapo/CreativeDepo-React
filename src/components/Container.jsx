import './Container.css';
import Header from './header/Header.jsx';
import Swiper from './Swiper/Swiper';
import Filter from './Filter/Filter';
import Prodcuts from './ProductsContainer/ProductsContainer'
import HelpUkraine from './HelpUkraine/HelpUkraine';
import Footer from './Footer/Footer';

function Container() {
  return (
    <div className="main">
            <Header />
            <Swiper />
            <Filter />
            <Prodcuts />
            <HelpUkraine />
            <Footer />
    </div>
  );
}

export default Container;
