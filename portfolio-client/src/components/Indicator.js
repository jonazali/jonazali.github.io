import React from 'react';

// Import Components Here
import { Grid, Button, Image, Rail, Segment, Icon } from 'semantic-ui-react';

// Import Media Here

// Import Styles Here
import '../styles/Indicator.css'

class Indicator extends React.Component {

    render(){
        return(
            <div id='IndicatorDiv'>
                <Icon name='circle outline' size='big' />
            </div>
        )
    }
} 

export default Indicator;