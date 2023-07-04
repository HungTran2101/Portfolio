import React from 'react';
import S from './About.module.scss';
import { AboutData } from '../../utils/DataConfig';
import { IoMapSharp } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/autoplay';

export default function About() {
  return (
    <div id="about" className={S.about}>
      <div className="container section">
        <div className={S.aboutWrapper}>
          <div className={S.images}>
            <figure className={S.banner}>
              <img src={AboutData.banner} alt="about" />
            </figure>
            <div className={S.techSlides}>
              <Swiper
                speed={2000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                loop="true"
                modules={[Autoplay]}
                spaceBetween={5}
                slidesPerView={4}
              >
                {AboutData.swiperSlides.map((item, index) => (
                  <SwiperSlide className={S.swiper_slide} key={index}>
                    <figure className={S.logo}>
                      <img src={item} alt="techlogo" />
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className={S.info}>
            <div className={S.label}>{AboutData.label}</div>
            <div className={S.title}>
              {AboutData.title} <IoMapSharp />
            </div>
            <div className={S.description}>{AboutData.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
