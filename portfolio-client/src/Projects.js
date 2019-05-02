import React from 'react';
import {Glide} from 'react-glide';
import './glide.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className='projects-container'>
        <header className='projects-header'>Projects</header>
        <Glide>
        <img src='./assets/img/azali_photo.jpg' alt='Jons Profile' />
        </Glide>
      </article>
    );
  }
}

export default Projects;
