import { useRef, useEffect, useState } from 'react';
import './Header.css';
import Logo from './img/logo.svg';



function Header() {

  const header = useRef(0);

  useEffect(() => {
    const handleScroll = event => {
      if(window.scrollY >= 100){
        header.current.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      }else{
        header.current.style.backgroundColor = "";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className="header" ref={header} >
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
