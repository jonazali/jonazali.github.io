/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Glide } from 'react-glide';

//Import Styles and External Files
import './projects.css';

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
          <img src='https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
          <img src='https://static.euronews.com/articles/stories/03/21/73/66/880x495_cmsv2_298e3b01-877d-57e3-9ce0-0542084c5af4-3217366.jpg' />
        </Glide>
      </article>
    );
  }
}

export default Projects;
