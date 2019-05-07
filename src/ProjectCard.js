import React from 'react';

import './projectCard.css';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { title, img, weblink, details, onOpenLink } = this.props;
    return (
      <div className='display-container'>
        <h2>{title}</h2>
        <div className='details-container'>
          <img
            className='picture'
            src={img}
            alt='project_picture'
            role='button'
            onClick={() => onOpenLink(weblink)}
          />
          <p className='details'>{details}</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
