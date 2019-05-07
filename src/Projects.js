/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Glide } from 'react-glide';
import ProjectCard from './ProjectCard';

//Import Styles and External Files
import './projects.css';

import projectList from './projectList';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className='projects-container'>
        <header className='projects-header'>Projects</header>
        <Glide infinite dots={true}>
          {projectList.map((project) => (
            <div>
              <ProjectCard
                title={project.title}
                img={project.src}
                weblink={project.weblink}
                details={project.details}
              />
            </div>
          ))}
        </Glide>
      </article>
    );
  }
}

export default Projects;
