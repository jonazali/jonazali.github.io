import React from 'react';

// Import Components Here

// Import Media Here
import logo from '../images/Logo_Cropped.png';

// Import Styles Here
import '../styles/Home.css';
import {Grid, Button, Image } from 'semantic-ui-react';

class Home extends React.Component {

    render(){
        return(
            <div id="HomeContainer"> 
                <Grid>
                    <Grid.Column id="HomeDescriptionButtonContainer" width={8}>
                            <p id='HomeDescription'>Hi! My name is Jonathan Azali and I am Full Stack Web Developer!</p>
                            <Button id='HomeButton'>Click Here to View My Portfolio</Button>
                    </Grid.Column>
                    <Grid.Column id="ImageContainer" width={8}>
                        <Image size='big' id='HomeImg' src={logo} alt='logo' wrapped /> 
                    </Grid.Column>
                    
                </Grid>
            </div>
        )
    }
}

export default Home;