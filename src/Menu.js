import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import './menu.css';
import azali_logo_pyramid from './assets/img/azali_logo_pyramid.png';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className='menu-header'>
        <img
          className='azali-logo-pyramid'
          src={azali_logo_pyramid}
          alt='azali_logo'
        />
        <table className='menu-table'>
          <tr className='menu-tr'>
            <td className='menu-td'>
              <button className='menu-button' id='about-button'>
                About
              </button>
            </td>
            <td className='menu-td'>
              <button className='menu-button' id='projects-button'>
                Projects
              </button>
            </td>
            <td className='menu-td'>
              <button className='menu-button' id='blogs-button'>
                Blogs
              </button>
            </td>
          </tr>
        </table>
      </header>
    );
  }
}

export default Menu;
