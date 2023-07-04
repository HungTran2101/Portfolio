import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';
import avatar from '../assets/images/avatar.png';
import reactsvg from '../assets/images/react-original-wordmark.svg';
import csssvg from '../assets/images/css3-original-wordmark.svg';
import htmlsvg from '../assets/images/html5-original-wordmark.svg';
import javascriptsvg from '../assets/images/javascript-original.svg';
import nextjssvg from '../assets/images/nextjs-original.svg';
import sasssvg from '../assets/images/sass-original.svg';
import tailwindcsssvg from '../assets/images/tailwindcss-plain.svg';
import typescriptsvg from '../assets/images/typescript-plain.svg';

export const Info = {
  name: "Hung's Portfolio",
  phone: '+84 938 199 067',
  address: 'TP. Ho Chi Minh, Viet Nam',
  github: 'https://github.com/HungTran2101',
  linkedin: 'https://www.linkedin.com/in/hùng-trần-nhật-3a0a4323b',
  avatar,
};

export const NavItems = [
  {
    name: 'Intro',
    url: '#intro',
  },
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Contact',
    url: '#contacts',
  },
];

export const ProfileLinks = [
  {
    name: 'Github',
    logo: <BsGithub />,
    url: Info.github,
  },
  {
    name: 'Linkedin',
    logo: <BsLinkedin />,
    url: Info.linkedin,
  },
];

export const HeaderData = {
  name: Info.name,
  links: ProfileLinks,
  navItems: NavItems,
  navButton: <SlMenu />,
};

export const IntroData = {
  jobPosition: 'Frontend React Developer',
  firstText:
    "Hii, I'm Tran Nhat Hung. A friendly Front-end Developer from TP. Ho Chi Minh, Viet Nam",
  profileLinks: ProfileLinks,
  avatar: Info.avatar,
  techs: {
    label: 'Techs',
    items: [
      reactsvg,
      nextjssvg,
      javascriptsvg,
      csssvg,
      htmlsvg,
      sasssvg,
      tailwindcsssvg,
      typescriptsvg,
    ],
  },
};
