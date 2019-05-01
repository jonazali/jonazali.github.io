import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <article>
        <h1>About me</h1>
        <p>
          I am a veteran of the United States Marine Corps and an alumni of
          California State University Northridge. I obtained a bachelor of
          Science in Computer Information Technology with a Domain Emphasis in
          Mathematics.
        </p>
        <p>
          I have several links below if you are interested in my online presence
        </p>
      </article>
    );
  }
}

export default About;
