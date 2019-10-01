import React from 'react';

// Import Components Here
import Home from '../components/Home.js';
import About from '../components/About.js';
import Projects from '../components/Projects.js';

// Import Styles Here
import '../styles/Main.css';

class Portfolio extends React.Component {

    render(){
        return(
            <main>
                <Home />
                <About />
                <Projects />
                <Blog />
            </main>
        )
    }
}

export default Portfolio;