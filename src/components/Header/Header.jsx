import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './header.scss';

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = (evt) => {
    if(evt.target.matches('.menu')) {
      setMenu(false);
    }
    console.log(evt)
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <div className="site-header__top d-flex align-items-center justify-content-between mb-4">
            <div className="localization">
              <select className="localization__select">
                <option value="uzbek">Uzbek</option>
                <option value="rus">Russian</option>
              </select>
              <span className="localization__arrow"></span>
            </div>
            <div className="site-header__sign">
              <Link className="me-3" to="/login">
                Login
              </Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
          <div className="site-header__center d-flex align-items-center justify-content-between">
            <button className="menu-btn" onClick={() => openMenu()}>
              <i class="fa-solid fa-bars"></i>
            </button>
            <Link to="/">
              <img src={Logo} alt="Brezza" />
            </Link>
            <input
              type="text"
              placeholder="Search for product"
              className="form-control rounded-1"
            />
            <Link className="like rounded-1" to="/cart">
              <i class="fa fa-heart"></i>
            </Link>
          </div>
          <div className="site-header__bottom">
            <nav className="nav rounded-2">
              <ul className="nav__list d-flex align-items-center justify-content-between ">
                <li>
                  <Link to="/">Bosh sahifa</Link>
                </li>
                <li>
                  <Link to="/vegetables">Sabzavotlar</Link>
                </li>
                <li>
                  <Link to="/fruits">Mevalar</Link>
                </li>
                <li>
                  <Link to="/organic">Poliz ekinlari</Link>
                </li>
                <li>
                  <Link to="/about">Biz Haqimizda</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={`menu ${menu ? 'open' : ''}`} onClick={(evt) => closeMenu(evt)}>
        <div className={`menu__inner ${menu ? 'open' : ''}`}>
          <label className="px-3 w-100 input-group">
            <input
              type="text"
              placeholder="Search for product"
              className="form-control"
            />
            <button className="search-btn btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </label>
          <ul className="d-flex flex-column">
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>
              <Link to="/vegetables">Sabzavotlar</Link>
            </li>
            <li>
              <Link to="/fruits">Mevalar</Link>
            </li>
            <li>
              <Link to="/organic">Poliz ekinlari</Link>
            </li>
            <li>
              <Link to="/about">Biz Haqimizda</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
