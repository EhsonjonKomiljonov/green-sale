import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Cart from '../../assets/images/cart.png';
import './header.scss';

export const Header = () => {
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
            <Link to="/">
              <img src={Logo} alt="Brezza" />
            </Link>
            <input
              type="text"
              placeholder="Search for product"
              className="form-control rounded-1"
            />
            <Link className="cart rounded-1" to="/cart">
              <span className="cart__img">
                <img src={Cart} alt="cart" />
              </span>
              <span className="cart__count d-inline-block ms-2 me-2">0</span>
              MY CART/ <span className="cart__price">$0.00</span>
            </Link>
          </div>
          <div className="site-header__bottom">
            <nav className="nav rounded-2">
              <ul className="nav__list d-flex align-items-center justify-content-between ">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/vegetables">Vegetables</Link>
                </li>
                <li>
                  <Link to="/fruits">Fruits</Link>
                </li>
                <li>
                  <Link to="/organic">Organic Fruits</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/pages">Pages</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
