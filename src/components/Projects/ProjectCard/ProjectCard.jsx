import React, { useEffect, useRef } from 'react';
import S from './ProjectCard.module.scss';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

export default function ProjectCard({ project }) {
  const card = useRef();
  const img = useRef();

  useEffect(() => {
    const translateImgDown = () => {
      img.current.style.transform = 'translateY(-93%)';
    };

    const translateImgUp = () => {
      img.current.style.transform = 'translateY(0%)';
    };

    if (project.name !== 'Chatala') {
      card.current.addEventListener('mouseover', translateImgDown);
      card.current.addEventListener('mouseout', translateImgUp);
    }

    return () => {
      card.current.removeEventListener('mouseover', translateImgDown);
      card.current.removeEventListener('mouseout', translateImgUp);
    };
  }, []);

  return (
    <div className={S.projectCard} ref={card}>
      <a href={project.demo || project.code} target="_blank" className={S.projectImg}>
        <img src={project.img} alt="projectImg" ref={img} />
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
              Code <BsGithub />
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
