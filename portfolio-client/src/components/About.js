import React from 'react';

// Import Components Here
import ProfileImg from '../images/Profile.jpg';
// Import Media Here

// Import Styles Here

class About extends React.Component {

    render(){
        return(
            <section className='AboutPage'>
                <p> I am a web developer who specializes in Full Stack Web Development. I also have an eye for UI/UX design. Check out my list of skills by clicking the tab next to my picture or checkout my online presnce by clicking one of the icons below!</p>
                <div className='ProfileContainer'>
                    <img className='Profile' src={ProfileImg} alt='Profile Img'></img>
                </div>
            </section>
        )
    }
}

export default About;