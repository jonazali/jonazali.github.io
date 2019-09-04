import React from 'react';

// Import Components Here

// Import Media Here
import logo from '../images/Logo.png';

// Import Styles Here
import '../styles/Home.css';

class Home extends React.Component {

    render(){
        return(
            <section className='HomePage'>
                <p className='HomeDescription'>Hi! My name is Jonathan Azali and I am Full Stack Web Developer!</p>
                <button className='HomeButton'>Click Here to View My Portfolio</button>
                <img className='HomeImg' src={logo} alt='logo'/>
            </section>
        )
    }
}

export default Home;