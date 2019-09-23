import React from 'react';

// Import Components Here

// Import Media Here
import logo from '../images/Logo_Cropped.png';

// Import Styles Here
import '../styles/Home.css';
import {Container, Grid, Button, Image } from 'semantic-ui-react';

class Home extends React.Component {

    render(){
        return(
            <div id="HomeDiv"> 
                <Grid>
                    <Grid.Column id="HomeGridColumnOne" width={8}>
                            <Container text id='HomeDescription'>Hi! My name is Jonathan Azali and I am Full Stack Web Developer!
                            </Container>
                            <Button id='HomeButton'>Click Here to View My Portfolio</Button>
                    </Grid.Column>
                    <Grid.Column id="HomeGridColumnTwo" width={8}>
                        <Image size='big' id='HomeImg' src={logo} alt='logo' wrapped /> 
                    </Grid.Column>
                    
                </Grid>
            </div>
        )
    }
} 

export default Home;