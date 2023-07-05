import React from 'react';
import S from './Projects.module.scss';
import { ProjectData } from '../../utils/DataConfig';
import ProjectCard from './ProjectCard/ProjectCard';
import { PiBooksFill } from 'react-icons/pi';

export default function Projects() {
  return (
    <div id='projects' className={S.projects}>
      <div className="container section">
        <div className={S.projectsWrapper}>
          <div className={S.title}>{ProjectData.title}</div>
          <div className={S.description}>
            {ProjectData.description} <PiBooksFill />
          </div>
          <div className={S.projectCards}>
            {ProjectData.projects.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
