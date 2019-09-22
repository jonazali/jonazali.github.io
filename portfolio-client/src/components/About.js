import React from 'react';

// Import Components Here

// Import Media Here
import ProfileImg from '../images/Profile.jpg';
import Github from '../images/Github.png';
import Linkedin from '../images/Linkedin.png';

// Import Styles Here
import '../styles/About.css';
import {Grid, Image, Container} from 'semantic-ui-react';

class About extends React.Component {

    render(){
        return(
            <div id='AboutContainer'>
                <Grid>
                    <Grid.Row id='AboutRowContainer'>
                        <Grid.Column id='DescriptionContainer' width={11}>
                                <Container text id='Description'> I am a developer who specializes in Full Stack Web Development. I also have an eye for UI/UX design. Check out my list of skills by clicking the tab next to my picture or checkout my online presnce by clicking one of the icons below!</Container>
                                <Container id='OnlinePresenceContainer'>
                                    <Image size='small' floated='left' src={Github} alt='Github Img'/>
                                    <Image size='small' floated='right' src={Linkedin} alt='LinkedIn Img'/>
                                </Container>
                               
                        </Grid.Column>
                        <Grid.Column id='ProfileContainer' floated='right' width={5}>
                            <Image id='Profile' src={ProfileImg} alt='Profile Img' wrapped /> 
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default About;