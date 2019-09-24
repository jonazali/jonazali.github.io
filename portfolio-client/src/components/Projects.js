import React from 'react';

// Import Components Here
import { Grid, Button, Image, Rail, Segment, Icon } from 'semantic-ui-react';

// Import Media Here

// Import Styles Here
import '../styles/Projects.css'

class Projects extends React.Component {

    render(){
        return(
            <div id='ProjectsDivOuter'>
                <div id="ProjectsDivInner"> 
                <Segment id='ProjectCard'>
                        <Rail id='LeftArrow' position='left'>
                        <Icon name='chevron left' size='huge' />
                        </Rail>
                        <Segment>
                            Content Here
                        </Segment>
                        <Rail id='RightArrow' position='right'>
                            <Icon name='chevron right' size='huge' />
                        </Rail>
                </Segment>
                </div>
            </div>
        )
    }
} 

export default Projects;