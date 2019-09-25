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
                        <Grid id='ProjectsGrid'>
                            <Grid.Column id='ProjectsColumnOne' width={8} >
                                <Grid.Row id='ProjectsRowOne'>
                                    <Segment id='PictureSegment'>
                                        Picture Here
                                    </Segment>
                                </Grid.Row>
                                <Grid.Row id='ProjectsRowTwo'>
                                    <Segment id='TechSegment'>
                                        Tech Stack Here
                                    </Segment>
                                </Grid.Row>
                            </Grid.Column >
                            <Grid.Column id='ProjectsColumnTwo' width={8}>
                                <Segment id='DescriptionSegment'>
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