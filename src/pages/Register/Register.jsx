import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { API } from '../../API/api';
import { AuthContext } from '../../context/AuthContext';
import { cities } from '../../db/cities';
import { motion } from 'framer-motion';
import '../../components/Header/header.scss';
import './register.scss';
import { districts } from '../../db/districts';

export const Register = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  document.body.style.overflow = 'hidden';

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
    phoneNumber: '',
    region: '',
    district: '',
    address: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('Iltimos ismingizni kiriting!')
      .min(2, "Ism 2 harfdan ko'p bo'lishi lozim!")
      .max(100, "Ism 100 ta harfdan kam bo'lishi lozim!"),
    lastName: Yup.string()
      .required('Iltimos familiyangizni kiriting!')
      .min(2, "Familiya 2 harfdan ko'p bo'lishi lozim!")
      .max(100, "Familiya 100 ta harfdan kam bo'lishi lozim!"),
    phoneNumber: Yup.string()
      .required('Iltimos Telefon raqamingizni kiriting!')
      .min(8, 'Telefon raqam uzunligi 8 tadan ortiq bolishi lozim!')
      .max(9, "Telefon raqam uzunligi eng ko'pi 9 ta bolishi mumkin!"),
    region: Yup.string()
      .required('Iltimos shaharni tanlang!')
      .default('toshkent shahri'),
    district: Yup.string().required('Iltimos tumanni tanlang!'),
    address: Yup.string()
      .required('Iltimos Mahalla nomini kiriting!')
      .min(4, "Mahalla eng kami 3 harf bo'lishi lozim!"),
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
        /[\`!@#$%^&*()_+={}\[\]:;\"'<>,.?\\\/]+/,
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
    console.log(values);

    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append(
      'region',
      values.region ? values.region : 'toshkent shahri'
    );
    formData.append(
      'district',
      values.district ? values.district : 'toshkent shahri'
    );
    formData.append('address', values.address);
    formData.append('phoneNumber', '+998' + values.phoneNumber);
    formData.append('password', values.password);

    setAuth('+998' + values.phoneNumber);
    mutate(formData);
    mutateContact('+998' + values.phoneNumber);
  };

  return (
    <>
      <motion.div
        className="site-header__bottom"
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { duration: 0.7 } }}
      >
        <nav
          className="nav"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '9',
            maxWidth: '100%',
            height: '54px',
            borderRadius: '0',
            transition: 'all .5s ease',
            boxShadow: '10px 5px 20px #333, -10px 10px 10px #3333335e',
          }}
        >
          <ul
            className={`nav__list d-flex align-items-center ${
              scroll
                ? 'w-100 justify-content-start ms-5'
                : 'justify-content-between'
            }`}
          >
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>
              <Link to="/buy-vacancy">Olish uchun vakansiya</Link>
            </li>
            <li>
              <Link to="/sell-vacancy">Sotish uchun vakansiya</Link>
            </li>
            <li>
              <Link to="/about">Biz Haqimizda</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <motion.div
        className="signup-menu"
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { duration: 0.7 } }}
      >
        <button className="menu-btn" onClick={() => openMenu()}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </motion.div>

      <section className="sign-up">
        <div className="sign-up__inner">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 0.5, 1],
              transition: { duration: 0.7 },
            }}
            className="sign-up__img-box"
          ></motion.div>
          <motion.div
            className="sign-up__form-box"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            <h2>Ro'yxatdan o'tish</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="firstName">
                    Ismingiz
                  </label>
                  <Field name="firstName" type="text" />
                  <span className="err-message" data-has-content>
                    <ErrorMessage name="firstName" />
                  </span>
                </div>

                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="lastName">
                    Familiyangiz
                  </label>
                  <Field name="lastName" type="text" />
                  <span className="err-message" data-has-content>
                    <ErrorMessage name="lastName" />
                  </span>
                </div>

                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="phoneNumber">
                    Telefon raqamingiz
                  </label>
                  <div className='d-flex align-items-center phone'>
                    <span>+998</span>
                    <Field name="phoneNumber" type="number" />
                    <span className="err-message" data-has-content>
                      <ErrorMessage name="phoneNumber" />
                    </span>
                  </div>
                </div>

                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="region">
                    Viloyat
                  </label>
                  <Field as="select" name="region" type="text">
                    {cities.map((item) => (
                      <option key={item.name} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <span className="err-message" data-has-content>
                    <ErrorMessage name="region" />
                  </span>
                </div>

                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="district">
                    Tuman
                  </label>
                  <Field name="district" type="text" list="district" />
                  <datalist id="district">
                    {districts.map((item) => (
                      <option key={item.name} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </datalist>
                  <span className="err-message" data-has-content>
                    <ErrorMessage name="district" />
                  </span>
                </div>

                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="address">
                    Mahalla
                  </label>
                  <Field name="address" type="text" />
                  <span className="err-message" data-has-content>
                    <ErrorMessage name="address" />
                  </span>
                </div>

                <div className="d-flex flex-column input-box">
                  <label className="label" htmlFor="password">
                    Parol
                  </label>
                  <Field name="password" type="password" />
                  <span className="err-message" data-has-content>
                    <ErrorMessage name="password" />
                  </span>
                </div>

                <div className="btn-box">
                  <button type="submit">Yuborish</button>
                  <Link to="/login">
                    Kirish <i class="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </Form>
            </Formik>
          </motion.div>
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
