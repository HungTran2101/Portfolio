import React, { useState } from 'react';
import S from './Header.module.scss';
import { HeaderData } from '../../utils/DataConfig';
import { useOutsideClick } from '../../utils/FunctionAndHooks';
import { GrClose } from 'react-icons/gr';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const sideNavRef = useOutsideClick(() => setNavOpen(false));

  return (
    <>
      <div className={S.header}>
        <div className={S.name}>{HeaderData.name}</div>
        <div className={S.nav}>
          {HeaderData.navItems.map((item, index) => (
            <a key={index} className={S.navItem} href={item.url}>
              {item.name}
            </a>
          ))}
          <div className={S.links}>
            {HeaderData.links.map((item, index) => (
              <a key={index} href={item.url} target="_blank">
                {item.logo}
              </a>
            ))}
          </div>
        </div>
        <div className={S.navButton} onClick={() => setNavOpen((pre) => !pre)}>
          {HeaderData.navButton}
        </div>
      </div>
      <div
        className={
          navOpen ? `${S.sideHeader} ${S.sideHeaderOpen}` : `${S.sideHeader}`
        }
        ref={sideNavRef}
      >
        <div className={S.sideHeaderClose} onClick={() => setNavOpen(false)}>
          <GrClose />
        </div>
        <div className={S.name}>{HeaderData.name}</div>
        <div className={S.nav}>
          {HeaderData.navItems.map((item, index) => (
            <a key={index} className={S.navItem} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
        <div className={S.links}>
          {HeaderData.links.map((item, index) => (
            <a key={index} href={item.url} target="_blank">
              {item.logo}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
