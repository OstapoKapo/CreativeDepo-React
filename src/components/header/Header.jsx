import './Header.css';
import Logo from './img/logo.svg'
// /Users/User/Desktop/REACT/reactProject/CreativeDepo/src/utils/appendScript
import {appendScript} from 'src/utils/appendScript.jsx'
class Demo extends React.Component {
componentDidMount () {
    appendScript("components/header/header.js");
}
}

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
