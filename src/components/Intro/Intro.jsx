import React from 'react';
import S from './Intro.module.scss';
import { IntroData } from '../../utils/DataConfig';

export default function Intro() {
  return (
    <div id="intro" className={S.intro}>
      <div className="container">
        <div className={S.introWrapper}>
          <div className={S.info}>
            <div className={S.content}>
              <div className={S.jobPosition}>{IntroData.jobPosition}</div>
              <div className={S.firstText}>{IntroData.firstText}</div>
            </div>
            <figure className={S.avatar}>
              <img src={IntroData.avatar} alt="avatar" />
            </figure>
          </div>
          <div className={S.techs}>
            {IntroData.techs.items.map((item, index) => (
              <figure key={index} className={S.techItem}>
                <img src={item} alt="tech" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
