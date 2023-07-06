import React from 'react';
import S from './Contact.module.scss';
import { ContactData } from '../../utils/DataConfig';
import { BiSolidHandDown } from 'react-icons/bi';

export default function Contact() {
  return (
    <div id='contact' className={S.contact}>
      <div className="container section">
        <div className={S.contactWrapper}>
          <div className={S.title}>{ContactData.title}</div>
          <div className={S.description}>
            {ContactData.description} <BiSolidHandDown />
          </div>
          <div className={S.infoWrapper}>
            {ContactData.info.map((item, index) => (
              <div key={index} className={S.info}>
                <div className={S.icon}>{item.icon}</div>
                <div className={S.contents}>
                  <div className={S.label}>{item.label}</div>
                  {item.label === 'Mail' ? (
                    <a href={`mailto:${item.content}`} className={S.content}>
                      {item.content}
                    </a>
                  ) : (
                    <div className={S.content}>{item.content}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
