import React, { useEffect } from 'react';
import S from './ProjectCard.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

export default function ProjectCard({ project }) {
  useEffect(() => {
    const img = document.querySelector(`.${S.projectImg} img`);
    const card = document.getElementsByClassName(S.projectCard)[0];

    const translateImgDown = () => {
      img.style.transform = 'translateY(-93%)';
    };

    const translateImgUp = () => {
      img.style.transform = 'translateY(0%)';
    };

    card.addEventListener('mouseover', translateImgDown);
    card.addEventListener('mouseout', translateImgUp);

    return () => {
      card.removeEventListener('mouseover', translateImgDown);
      card.removeEventListener('mouseout', translateImgUp);
    };
  }, []);

  return (
    <div className={S.projectCard}>
      <a href={project.demo} target="_blank" className={S.projectImg}>
        <img src={project.img} alt="projectImg" />
      </a>
      <div className={S.projectInfo}>
        <div className={S.projectName}>{project.name}</div>
        <div className={S.projectDescription}>{project.description}</div>
        <div className={S.projectTechs}>
          {project.techs.map((item, index) => (
            <div key={index} className={S.projectTech}>
              {item}
            </div>
          ))}
        </div>
        <div className={S.projectLinks}>
          {project.code && (
            <a className={S.projectLink} href={project.code} target="_blank">
              <BsGithub />
            </a>
          )}
          {project.demo && (
            <a className={S.projectLink} href={project.demo} target="_blank">
              Live Demo <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
