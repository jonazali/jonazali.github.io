import React from 'react';
import './menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table className='menu-table'>
        <tr className='menu-tr'>
          <td className='menu-td'>About</td>
          <td className='menu-td'>Projects</td>
          <td className='menu-td'>Contact</td>
        </tr>
      </table>
    );
  }
}

export default Menu;
