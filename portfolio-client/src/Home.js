import React from 'react';
import Menu from './Menu';
import Display from './Display';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='home-container'>
        <Menu />
        <Display />
      </section>
    );
  }
}

export default Home;
