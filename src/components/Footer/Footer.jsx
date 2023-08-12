import React from 'react';
import './footer.scss';
import footerLogo from '../../assets/images/logoFooter.svg';
export const Footer = () => {
  return (
    <>
      <section className='footer'>
        <div className='container'>
          <div className='footer__inner'>
            <div className='row justify-content-center'>
              <div className='col-12 text-md-start text-center pt-md-0 pt-3 col-md-2'>
                <h5 className='h5 footer__title'>Biz Haqimizda</h5>
                <ul className='footer__list'>
                  <li className='footer__item'>
                    <a href=''>Biz Haqimizda</a>
                  </li>
                  <li className='footer__item'>
                    <a href=''>FAQ</a>
                  </li>
                </ul>
              </div>
              <div className='col-12 text-md-start text-center pt-md-0 pt-3 col-md-2'>
                <h5 className='h5 footer__title'>Linklar</h5>
                <ul className='footer__list  '>
                  <li className='footer__item'>
                    <a href=''>BOSH SAHIFA</a>
                  </li>
                  <li className='footer__item'>
                    <a href=''>SABZAVOTLAR</a>
                  </li>
                  <li className='footer__item'>
                    <a href=''>MEVALAR</a>
                  </li>
                  <li className='footer__item'>
                    <a href=''>POLIZ EKINLARI</a>
                  </li>
                </ul>
              </div>
              <div className='col-12 text-md-start text-center pt-md-0 pt-3 col-md-2'>
                <h5 className='h5 footer__title'>Login</h5>
                <ul className='footer__list'>
                  <li className='footer__item'>
                    <a href=''>Login</a>
                  </li>
                  <li className='footer__item'>
                    <a href=''>Register</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__logo text-center  pt-5 pb-0'>
              <a
                href='#'
                className='footer__link__logo'
              >
                <img
                  src={footerLogo}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
