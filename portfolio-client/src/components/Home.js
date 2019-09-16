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
            <Grid className='HomePage'>
                <Grid.Column id="HomeDescriptionButtonContainer" width={8}>
                        <p id='HomeDescription'>Hi! My name is Jonathan Azali and I am Full Stack Web Developer!</p>
                        <Button id='HomeButton'>Click Here to View My Portfolio</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Image id='HomeImg' src={logo} alt='logo' wrapped /> 
                </Grid.Column>
                
            </Grid>
        )
    }
}

export default Home;