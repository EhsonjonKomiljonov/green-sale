import { Field, Form, Formik } from 'formik';
import React, { useContext, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { API } from '../../API/api';
import { AuthContext } from '../../context/AuthContext';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/token/tokenAction';
import 'react-toastify/dist/ReactToastify.css';
import './verify-contact.scss';

export const VerifyContact = () => {
  const dispatch = useDispatch();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(auth) == '{}') return navigate('/');
  }, []);

  const initialValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
  };

  const validationSchema = Yup.object({
    code1: Yup.number().required(),
    code2: Yup.number().required(),
    code3: Yup.number().required(),
    code4: Yup.number().required(),
    code5: Yup.number().required(),
  });

  const { mutate } = useMutation('verify-contact', API.verifyContact, {
    onSuccess: (data) => {
      if (data.data.token) {
        dispatch(setToken(data.data.token));

        toast.success("To'g'ri parol!");

        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    },
    onError: (err) => {
      toast.error("Noto'gri parol!");
    },
  });

  const onSubmit = (values) => {
    let num = '';

    num += values.code1;
    num += values.code2;
    num += values.code3;
    num += values.code4;
    num += values.code5;

    mutate({
      phoneNumber: auth,
      code: +num,
    });
  };

  const handleBackspace = (formik, currentField, prevField) => (e) => {
    if (e.keyCode === 8 && formik.values[currentField] === '') {
      formik.setFieldTouched(prevField, true);
      document.querySelector(`input[name="${prevField}"]`).focus();
    }
  };

  const handleChange = (formik, currentField, nextField) => (e) => {
    if (e.target.value.length === 1) {
      if (nextField) {
        formik.setFieldTouched(nextField, true);
        document.querySelector(`input[name="${nextField}"]`).focus();
      }
    }

    formik.handleChange(e);
  };

  return (
    <section className="verify">
      <div className="container">
        <div className="verify__inner d-flex align-items-center justify-content-center">
          <div className="verify__password">
            <h2 className="fs-3 text-center text-white">Parolni tasdiqlang!</h2>
            <p className="text-center text-white mb-4">
              Telefon raqamingizga parol yuborildi.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form>
                  <div>
                    <Field
                      required
                      type="number"
                      name="code1"
                      onKeyDown={handleBackspace(formik, 'code1', 'code5')}
                      onChange={handleChange(formik, 'code1', 'code2')}
                    />
                    <Field
                      required
                      type="number"
                      name="code2"
                      onKeyDown={handleBackspace(formik, 'code2', 'code1')}
                      onChange={handleChange(formik, 'code2', 'code3')}
                    />
                    <Field
                      required
                      type="number"
                      name="code3"
                      onKeyDown={handleBackspace(formik, 'code3', 'code2')}
                      onChange={handleChange(formik, 'code3', 'code4')}
                    />
                    <Field
                      required
                      type="number"
                      name="code4"
                      onKeyDown={handleBackspace(formik, 'code4', 'code3')}
                      onChange={handleChange(formik, 'code4', 'code5')}
                    />
                    <Field
                      required
                      type="number"
                      name="code5"
                      onKeyDown={handleBackspace(formik, 'code5', 'code4')}
                      onChange={handleChange(formik, 'code5')}
                    />
                  </div>

                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};
