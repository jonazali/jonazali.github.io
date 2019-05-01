import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

//Components
import About from './About';
import Blogs from './Blogs';
import Projects from './Projects';

//Styles and External Files
import './home.css';
import azali_logo from './assets/img/azali_logo.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className='home-container'>
          <header className='menu-header'>
            <img className='azali-logo' src={azali_logo} alt='azali_logo' />
            <table className='menu-table'>
              <tr className='menu-tr'>
                <td className='menu-td'>
                  <button className='menu-button' id='about-button'>
                    <NavLink to='/about'>About</NavLink>
                  </button>
                </td>
                <td className='menu-td'>
                  <button className='menu-button' id='projects-button'>
                    <NavLink to='/projects'>Projects</NavLink>
                  </button>
                </td>
                <td className='menu-td'>
                  <button className='menu-button' id='blogs-button'>
                    <NavLink to='/blogs'>Blogs</NavLink>
                  </button>
                </td>
              </tr>
            </table>
          </header>

          <Switch>
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/blogs' component={Blogs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
