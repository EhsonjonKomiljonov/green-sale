import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { API } from '../../API/api';
import '../../components/Header/header.scss';
import { AuthContext } from '../../context/AuthContext';
import './register.scss';

export const Register = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = (evt) => {
    if (evt.target.matches('.menu')) {
      setMenu(false);
    }
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    region: '',
    district: '',
    address: '',
    phoneNumber: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('Iltimos ismingizni kiriting!')
      .min(2, "Ism 2 harfdan ko'p bo'lishi lozim!")
      .max(100, "Ism 100 ta harfdan kam bo'lishi lozim!"),
    lastName: Yup.string()
      .required('Iltimos ismingizni kiriting!')
      .min(2, "Ism 2 harfdan ko'p bo'lishi lozim!")
      .max(100, "Ism 100 ta harfdan kam bo'lishi lozim!"),
    region: Yup.string()
      .required('Iltimos shaharni kiriting!')
      .min(5, "Shahar eng kami 5 harfdan iborat bo'lishi lozim!"),
    district: Yup.string().required('Iltimos tumanni kiriting!'),
    address: Yup.string().required('Iltimos Mahall nomini kiriting!'),
    phoneNumber: Yup.string()
      .required('Iltimos Telefon raqamingizni kiriting!')
      .min(9, 'Telefon raqam uzunligi 9 tadan ortiq bolishi lozim!')
      .max(13, "Telefon raqam uzunligi eng ko'pi 13 ta bolishi mumkin!")
      .matches(/^\+998\d{9}$/, 'telefon raqam +998dan boshlanishi lozim!'),
    password: Yup.string()
      .required('Iltimos parolingizni kiriting!')
      .matches(/[0-9]/, "Parolda bir dona bo'lsa ham raqam bo'lishi lozim!")
      .matches(
        /[a-z]/,
        "Parolda bir dona bo'lsa ham kichik harf bo'lishi lozim!"
      )
      .matches(
        /[A-Z]/,
        "Parolda bir dona bo'lsa ham katta harf ishlatilishi lozim!"
      )
      .matches(
        /(?=.*[@#$%^&+=])/,
        "Parolda bir dona bo'lsa ham simbol ishlatilishi lozim. misol (#$%)"
      ),
  });

  const { mutate } = useMutation('signup-user', API.registerUser, {
    onSuccess: (data) => {
      if (data.data.result) {
        navigate('/verify-contact');
      }
    },
    onError: (err) => {
      toast.error(
        err.response.data.ErrorMessage == 'User already exists'
          ? "Bunday user avval ro'yhatdan o'tgan!"
          : err.response.data.ErrorMessage
      );
    },
  });

  const { mutate: mutateContact } = useMutation('send-code', API.sendContact, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('region', values.region);
    formData.append('district', values.district);
    formData.append('address', values.address);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('password', values.password);

    setAuth(values.phoneNumber);
    mutate(formData);
    mutateContact(values.phoneNumber);
  };

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
            <div className="form-box">
              <div className="form-value">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <h2>Register</h2>
                    <div className="d-flex align-items-center justify-content-between flex-sm-row flex-column">
                      <div className="inputbox me-sm-4">
                        <Field className="input" name="firstName" type="text" />
                        <label className="label">Ismingiz</label>
                        <span className="text-danger">
                          <ErrorMessage name="firstName" />
                        </span>
                      </div>
                      <div className="inputbox">
                        <Field className="input" name="lastName" type="text" />
                        <label className="label">Familiyangiz</label>
                        <span className="text-danger">
                          <ErrorMessage name="lastName" />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-sm-row flex-column">
                      <div className="inputbox me-sm-4">
                        <Field
                          className="input"
                          name="phoneNumber"
                          type="tel"
                          required
                        />
                        <label className="label">Telefon raqamingiz</label>
                        <span className="text-danger">
                          <ErrorMessage name="phoneNumber" />
                        </span>
                      </div>
                      <div className="inputbox">
                        <Field className="input" name="region" type="text" />
                        <label className="label">Shahar</label>
                        <span className="text-danger">
                          <ErrorMessage name="region" />
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-sm-row flex-column">
                      <div className="inputbox me-sm-4">
                        <Field className="input" name="district" type="text" />
                        <label className="label">Tuman</label>
                        <span className="text-danger">
                          <ErrorMessage name="district" />
                        </span>
                      </div>
                      <div className="inputbox">
                        <Field className="input" name="address" type="text" />
                        <label className="label">Mahalla</label>
                        <span className="text-danger">
                          <ErrorMessage name="address" />
                        </span>
                      </div>
                    </div>
                    <div className="inputbox w-sm-50 mx-auto">
                      <Field name="password" type="password" />
                      <label className="label-two">Password</label>
                      <span className="text-danger">
                        <ErrorMessage name="password" />
                      </span>
                    </div>
                    <button type="submit">Send</button>
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
