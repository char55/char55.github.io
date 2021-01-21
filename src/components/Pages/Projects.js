import React from 'react';
import Tile from '../Tile';
import './Projects.css';
import { projects } from '../../dataInput';

function Projects() {
  console.log(projects);
  // links must be full URL https://www.google.ca
  return (
    <>
      <div className="projects-container">
        <div> Personal Projects completed to date:</div>
        <div className="project-list">
          {projects.map((project, index) => (
            <Tile
              key={index}
              projectName={project.name}
              projectLink={project.projectLink}
              projectDescription={project.desciption}
              githubLink={project.github}
            ></Tile>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
