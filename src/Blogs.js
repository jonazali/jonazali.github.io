import React from 'react';

//Import Styles and External Files
import './blogs.css';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article className='blogs-container'>
        <header className='blogs-header'>Blogs</header>
      </article>
    );
  }
}

export default Blogs;
