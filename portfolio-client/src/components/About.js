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
            <div id='AboutPage'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column id='AboutDescriptionContainer' width={5}>
                                <p id='AboutDescription'> I am a web developer who specializes in Full Stack Web Development. I also have an eye for UI/UX design. Check out my list of skills by clicking the tab next to my picture or checkout my online presnce by clicking one of the icons below!</p>
                                <Grid>
                                </Grid>
                        </Grid.Column>
                        <Grid.Column floated='right' width={5}>
                            <Image id='Profile' src={ProfileImg} alt='Profile Img' wrapped /> 
                        </Grid.Column>
                        
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default About;