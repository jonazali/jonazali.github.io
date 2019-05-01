import React from 'react';

//Styles and External Components
import './about.css';

import azali_photo from './assets/img/azali_photo.jpg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className='about-container'>
        <header className='about-header'>About me</header>
        <div className='photo-description-container'>
          <img className='azali-photo' src={azali_photo} alt='azali_photo' />
          <p className='about-description'>
            Hi there, Welcome to my website! My name is Jonathan Sebastian
            Azali. I am a veteran of the United States Marine Corps and an
            alumni of California State University Northridge. I obtained my
            bachelor's in Computer Information Technology with a Domain Emphasis
            in Mathematics. I love developing applications on both mobile and
            web platforms. Check out my projects and links to my online
            presence!
          </p>
        </div>
      </article>
    );
  }
}

export default About;
