import React from 'react';

import { Icon } from 'semantic-ui-react';

import './header.css'

const Header = ({ title }) => (
  <div className="Header_container">
    <div  className="header">
      <Icon className='logout' name='log out' size='large'/>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  </div>
)

export default Header;
