/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ProjectCard from './ProjectCard';

//Import Styles and External Files
import './projects.css';

import projectList from './projectList';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Functions for Slides
  openLink = weblink => {
    window.location = weblink;
  };

  render() {
    return (
      <article className='projects-container'>
        <header className='projects-header'>Projects</header>
        <div className='group-container'>
        {projectList.map(project => (
          <div className='single-container'>
            <ProjectCard
              title={project.title}
              img={project.src}
              weblink={project.weblink}
              details={project.details}
              onOpenLink={this.openLink}
            />
          </div>
        ))}
        </div>
      </article>
    );
  }
}

export default Projects;
