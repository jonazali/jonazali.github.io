import React from 'react';

// Import Components Here

// Import Media Here
import ProfileImg from '../images/Profile.jpg';
import Github from '../images/Github.png';
import Linkedin from '../images/Linkedin.png';

// Import Styles Here
import '../styles/About.css';
import {Grid, Image} from 'semantic-ui-react';

class About extends React.Component {

    render(){
        return(
            <Grid id='AboutPage'>
                <Grid.Row>
                    <Grid.Column id='AboutDescriptionContainer' width={8}>

                            <p id='AboutDescription'> I am a web developer who specializes in Full Stack Web Development. I also have an eye for UI/UX design. Check out my list of skills by clicking the tab next to my picture or checkout my online presnce by clicking one of the icons below!</p>
                            
                            <Grid>
                                <Grid.Column width={8}>
                                    <Image id='GithubLink' src={Github} alt='Github Link' size='small'/>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Image id='LinkedinLink' src={Linkedin} alt='Github Link' size='small'/>
                                </Grid.Column>
                            </Grid>
                        
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image id='Profile' src={ProfileImg} alt='Profile Img' wrapped /> 
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default About;