import React from 'react';
import S from './Intro.module.scss';
import { IntroData } from '../../utils/DataConfig';

export default function Intro() {
  return (
    <div id="intro" className={S.intro}>
      <div className="container">
        <div className={S.introWrapper}>
          <div className={S.info}>
            <figure className={`${S.mask} ${S.mask_type1} ${S.mask_type1_a1}`}>
              <figure className={S.mask__img}>
                <img src={IntroData.avatar} alt="avatar" />
              </figure>
            </figure>
            <div className={S.content}>
              <div className={S.jobPosition}>
                {IntroData.jobPosition}
                <img
                  src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  alt="gif"
                />
              </div>
              <div className={S.firstText}>{IntroData.firstText}</div>
              <div className={S.links}>
                {IntroData.profileLinks.map((item, index) => (
                  <a key={index} href={item.url} target="_blank">
                    {item.logo}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={S.techLabel}>{IntroData.techs.label}</div>
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
