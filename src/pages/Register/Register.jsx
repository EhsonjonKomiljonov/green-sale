import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import '../../components/Header/header.scss';
import './register.scss';

export const Register = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = (evt) => {
    if (evt.target.matches('.menu')) {
      setMenu(false);
    }
  };

  const initialValues = {
    first_name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required('Iltimos ismingizni kiriting!')
      .min(2, "Ism 2 harfdan ko'p bo'lishi lozim!")
      .max(100, "Ism 100 ta harfdan kam bo'lishi lozim!"),
    email: Yup.string()
      .required('Iltimos emailni kiriting!')
      .min(9, 'Email uzunligi 9 tadan ortiq bolishi lozim!')
      .max(120, "Email uzunligi eng ko'pi 120 ta bolishi mumkin!"),
    password: Yup.string().required('Iltimos parolingizni kiriting!'),
  });

  return (
    <>
      <div className="site-header__bottom">
        <nav
          className="nav"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '9',
            maxWidth: '1550px',
            height: '54px',
            borderRadius: '0',
            transition: 'all .5s ease',
          }}
        >
          <ul
            className={`nav__list d-flex align-items-center ${
              scroll
                ? 'w-100 justify-content-center'
                : 'justify-content-between'
            }`}
          >
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
      <div className="signup-menu">
        <button className="menu-btn" onClick={() => openMenu()}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <section className="sign-up">
        <div className="container">
          <div className="sign-up__inner">
            <div class="form-box">
              <div class="form-value">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <h2>Register</h2>
                    <div className="inputbox">
                      <Field className="input" name="first_name" type="text" />
                      <label className="label">Ismingiz</label>
                      <span className="text-warning fs-6">
                        <ErrorMessage name="first_name" />
                      </span>
                    </div>
                    <div className="inputbox">
                      <Field className="input" name="email" type="email" />
                      <label className="label">Email</label>
                      <span className="text-warning fs-6">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <div className="inputbox">
                      <Field name="password" type="password" />
                      <label className="label-two">Password</label>
                      <span className="text-warning fs-6">
                        <ErrorMessage name="password" />
                      </span>
                    </div>
                    <button>Send</button>
                    <div className="register">
                      <p>
                        Akkauntingiz bormi ?<Link to="/login"> Login </Link>
                      </p>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`menu ${menu ? 'open' : ''}`}
        onClick={(evt) => closeMenu(evt)}
      >
        <div className={`menu__inner ${menu ? 'open' : ''}`}>
          <label className="px-3 w-100 input-group">
            <input
              type="text"
              placeholder="Search for product"
              className="form-control"
            />
            <button className="search-btn btn">
              <i className="fa-solid fa-magnifying-glass"></i>
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
    </>
  );
};
