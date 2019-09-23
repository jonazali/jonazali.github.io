import React from 'react';

// Import Components Here
import { Grid, Button, Image, Rail, Segment } from 'semantic-ui-react';

// Import Media Here

// Import Styles Here
import '../styles/Projects.css'

class Projects extends React.Component {

    render(){
        return(
            <div id="ProjectsDiv"> 
                <Rail position='left'>
                    <Segment>Left Rail Content</Segment>
                </Rail>

                <Segment>Content Here</Segment>

                <Rail position='right'>
                    <Segment>Right Rail Conent</Segment>
                </Rail>
            </div>
        )
    }
} 

export default Projects;