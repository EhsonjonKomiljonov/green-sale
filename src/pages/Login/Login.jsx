import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import '../../components/Header/header.scss';
import './login.scss';

export const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, {resetForm}) => {
    resetForm()
  };

  const validationSchema = Yup.object({
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
      <section className="login">
        <div className="container">
          <div className="login__inner">
            <div class="form-box">
              <div class="form-value">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <h2>Login</h2>
                    <div className="inputbox">
                      <Field type="email" required />
                      <label htmlFor>Email</label>
                    </div>
                    <div className="inputbox">
                      <Field type="password" required />
                      <label htmlFor>Password</label>
                    </div>
                    <button>Log in</button>
                    <div className="register">
                      <p>
                        Don't have a account ?{' '}
                        <Link to="/register">Register</Link>
                      </p>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
