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
                        <Rail id='LeftArrow' className='Rails' position='left'>
                        <Icon name='chevron left' size='huge' />
                        </Rail>
                        <Grid>
                            <Grid.Column width={8} >
                                <Grid.Row>
                                    <Segment>
                                        Picture Here
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row>
                                    <Segment>
                                        Tech Stack Here
                                    </Segment>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Segment>
                                    Description Here
                                </Segment>
                            </Grid.Column>
                        </Grid>
                        
                        <Rail id='RightArrow' className='Rails' position='right'>
                            <Icon name='chevron right' size='huge' />
                        </Rail>
                </Segment>
                </div>
            </div>
        )
    }
} 

export default Projects;