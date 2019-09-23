import React from 'react';

// Import Components Here

// Import Media Here
import ProfileImg from '../images/Profile.jpg';
import Github from '../images/Github.png';
import Linkedin from '../images/Linkedin.png';

// Import Styles Here
import '../styles/About.css';
import {Grid, Icon, Image, Container} from 'semantic-ui-react';

class About extends React.Component {

    render(){
        return(
            <div id='AboutDiv'>
                <Grid id='AboutGrid'>
                    <Grid.Column id='AboutGridColumnOne' width={11}>
                            <Container text id='Description'> I am a developer who specializes in Full Stack Web Development. I also have an eye for UI/UX design. Check out my list of skills by clicking the tab next to my picture or checkout my online presnce by clicking one of the icons below!</Container>
                            <Container id='OnlinePresenceContainer'>
                                <Image size='small' floated='left' src={Github} alt='Github Img'/>
                                <Image size='small' floated='right' src={Linkedin} alt='LinkedIn Img'/>
                            </Container>
                               
                    </Grid.Column>
                    <Grid.Column id='AboutGridColumnTwo' floated='right' width={5}>
                            <Image id='ProfileImage' src={ProfileImg} alt='Profile Img' wrapped /> 
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default About;