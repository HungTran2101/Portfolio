import React from 'react';
import S from './Footer.module.scss';
import { FooterData } from '../../utils/DataConfig';

export default function Footer() {
  return (
    <div className={S.footer}>
      <div className="container">
        <div className={S.footerWrapper}>
          <div className={S.copyright}>{FooterData.copyright}</div>
          <div className={S.links}>
            {FooterData.links.map((item, index) => (
              <a key={index} href={item.url} target="_blank">
                {item.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
