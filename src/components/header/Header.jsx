import './Header.css';
import Logo from './img/logo.svg'


function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img className='header__logo' src={Logo} alt="logo" />
      </div>
      <div className="header__right">
        <div className="header__ul">
          <div className="header__li">КАТАЛОГ</div>
          <div className="header__li">ЗСУ</div>
          <div className="header__li">ОПТ</div>
          <div className="header__li">КОНТАКТИ</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
