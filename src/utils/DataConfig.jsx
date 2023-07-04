import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';
import avatar from '../assets/images/avatar.png';

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
    "Hii, I'm Tran Nhat Hung. A Front-end Developer in TP. Ho Chi Minh",
  profileLinks: ProfileLinks,
  avatar: Info.avatar,
  techs: {
    label: 'Techs',
    items: [
      "https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg",
      "https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg",
      "https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg",
      "https://github.com/devicons/devicon/blob/master/icons/html5/html5-original-wordmark.svg",
      "https://github.com/devicons/devicon/blob/master/icons/css3/css3-original-wordmark.svg",
      "https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg",
      "https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg",
      "https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg",
    ],
  },
};
