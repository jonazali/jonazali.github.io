import React from 'react';
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
            <td className='menu-td'>About</td>
            <td className='menu-td'>Projects</td>
            <td className='menu-td'>Contact</td>
          </tr>
        </table>
      </header>
    );
  }
}

export default Menu;
