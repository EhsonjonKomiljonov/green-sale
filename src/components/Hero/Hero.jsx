import React from 'react';
import './Hero.scss';
import cardBg from '../../assets/images/heroCardImg.png';
import cardBg2 from '../../assets/images/heroCardImgLeft.png';
import cardBg3 from '../../assets/images/heroCardImgLeft2.png';
import cardBg4 from '../../assets/images/heroCardImgLeft3.png';
import Slider from 'react-slick';

export const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  };
  return (
    <>
      <section className='hero pt-5 '>
        <div className='container'>
          <div className='hero__inner row align-items-center '>
            <div className='col-6'>
              <Slider {...settings}>
                <img
                  src={cardBg}
                  alt=''
                />{' '}
                <img
                  src={cardBg}
                  alt=''
                />{' '}
              </Slider>
            </div>
            <div className='col-3 d-flex flex-column  gap-4 '>
              <img
                src={cardBg2}
                alt=''
              />{' '}
              <img
                src={cardBg4}
                alt=''
              />{' '}
            </div>
            <div className='col-3'>
              <img
                src={cardBg3}
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
