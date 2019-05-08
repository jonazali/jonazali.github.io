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
        <div className='card-container'>
          <img
            className='picture'
            src={img}
            alt='project_picture'
            role='button'
            onClick={() => onOpenLink(weblink)}
          />
        </div>
    );
  }
}

export default ProjectCard;
