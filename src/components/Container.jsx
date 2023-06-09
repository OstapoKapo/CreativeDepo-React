import './Container.css';
import Header from './header/Header.jsx';
import Swiper from './Swiper/Swiper'

function Container() {
  return (
    <div className="main">
        <div className="main__container">
            <Header />
            <Swiper />
        </div>
    </div>
  );
}

export default Container;
