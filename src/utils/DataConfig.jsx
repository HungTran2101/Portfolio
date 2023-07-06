import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SlMenu } from 'react-icons/sl';
import { MdMarkunreadMailbox } from 'react-icons/md';
import { FaMapLocationDot } from 'react-icons/fa6';
import avatar from '../assets/images/avatar.png';
import reactsvg from '../assets/images/react-original-wordmark.svg';
import csssvg from '../assets/images/css3-original-wordmark.svg';
import htmlsvg from '../assets/images/html5-original-wordmark.svg';
import javascriptsvg from '../assets/images/javascript-original.svg';
import nextjssvg from '../assets/images/nextjs-original.svg';
import sasssvg from '../assets/images/sass-original.svg';
import tailwindcsssvg from '../assets/images/tailwindcss-plain.svg';
import typescriptsvg from '../assets/images/typescript-plain.svg';
import aboutBanner from '../assets/images/aboutBanner.jpg';
import chemlinkScreenshot from '../assets/images/chemlinkScreenshot.png';
import cvScreenshot from '../assets/images/cvScreenshot.png';
import cvPdf from '../assets/Hung_FE_React_CV.pdf';

export const Info = {
  name: "Hung's Portfolio",
  phone: '+84 938 199 067',
  address: 'TP. Ho Chi Minh, Viet Nam',
  mail: 'trannhathung2101@gmail.com',
  github: 'https://github.com/HungTran2101',
  linkedin: 'https://www.linkedin.com/in/tran-nhat-hung/',
  avatar,
  cv: cvPdf,
  location: 'TP. Ho Chi Minh, Viet Nam',
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
    url: '#contact',
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
    "Hii, I'm Tran Nhat Hung. An enthusiasm Front-end Developer from TP. Ho Chi Minh, Viet Nam",
  profileLinks: ProfileLinks,
  avatar: Info.avatar,
  cv: Info.cv,
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

export const AboutData = {
  label: 'About Me',
  title: 'An enthusiasm Front-end Developer from TP. Ho Chi Minh, Viet Nam',
  banner: aboutBanner,
  swiperSlides: [
    reactsvg,
    nextjssvg,
    javascriptsvg,
    csssvg,
    htmlsvg,
    sasssvg,
    tailwindcsssvg,
    typescriptsvg,
  ],
  description:
    "I am a front-end developer with 1 year of experience working with React on both static and dynamic websites. Currently, I am seeking a front-end developer position to further enhance my skills, gain additional training, and broaden my knowledge in front-end development. I am eager to make a significant contribution to the success of the company.",
};

export const ProjectData = {
  title: 'Projects',
  description: 'Each project help me learn more on Front-End Development road',
  projects: [
    {
      name: 'Chemlink',
      description:
        'A website introduce about chemical company. The website provide parallax scrolling, responsive design and animation on scoll to enchance user experiences.',
      img: chemlinkScreenshot,
      techs: ['NextJS', 'SCSS'],
      demo: 'https://www.chemlink.com.vn',
    },
    {
      name: 'Practice CV',
      description: 'A website for me to practicing about ReactJS Framework.',
      img: cvScreenshot,
      techs: ['ReactJS', 'SCSS'],
      code: 'https://github.com/HungTran2101/MyWebPractiseCV',
      demo: 'https://trannhathung-practise-cv.vercel.app',
    },
  ],
};

export const ContactData = {
  info: [
    {
      label: 'Location',
      icon: <FaMapLocationDot />,
      content: Info.location,
    },
    {
      label: 'Mail',
      icon: <MdMarkunreadMailbox />,
      content: Info.mail,
    },
  ],
  title: 'Contact',
  description: 'Feel free to contact me!',
};

export const FooterData = {
  copyright: 'Copyright © 2023. All rights are reserved',
  links: ProfileLinks,
};
